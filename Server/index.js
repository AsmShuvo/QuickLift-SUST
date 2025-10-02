const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const session = require("express-session");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // secure: true in production over HTTPS
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:5173/dashboard");
  }
);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) { return next(err); }
    res.redirect("/");
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