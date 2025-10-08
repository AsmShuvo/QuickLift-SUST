const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const session = require("express-session");
const connectDB = require("./config/db");
const User = require("./model/User")
const rideRoutes = require("./routes/rideRoutes");


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);



app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, sameSite: "lax" }, // set secure:true in production over https
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
            role: null, // default, must choose later
          });
        }
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


app.use("/api/rides", rideRoutes);


// **************************auth routes*********************************
app.post("/user/role", async (req, res) => {
  if (!req.user) return res.status(401).send("Not authenticated");

  const { role } = req.body;

  if (!["biker", "passenger"].includes(role)) {
    return res.status(400).send("Invalid role");
  }

  try {
    req.user.role = role;
    await req.user.save();
    res.json(req.user);
  } catch (err) {
    res.status(500).send("Error saving role");
  }
});

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:5173/auth/login" }),
  (req, res) => {
    if (!req.user.role) {
      res.redirect("http://localhost:5173/setup-profile");
    } else {
      res.redirect("http://localhost:5173/");
    }
  }
);

app.get("/", (req, res) => res.send("Server is running..."));

app.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect("http://localhost:5173/auth/login"); // back to login
  });
});

app.get("/user", (req, res) => {
  res.send(req.user || null);
});

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV || "development"} mode on http://localhost:${PORT}`
  )
);