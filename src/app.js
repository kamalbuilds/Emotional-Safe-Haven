const express = require("express");
const app = express();
const helmet = require("helmet");

const cors = require("cors");
const passport = require("passport");
const morgan = require("morgan");
const session = require("express-session");
const ErrorHandler = require("./utils/error");
const handleErrors = require("./middleware/handleErrors");
const path = require("path");
const corsOptions = {
  origin: "*",
};
const passportSetup = require("./passport");
app.use(morgan("dev"));
app.use(cors(corsOptions));

app.use(express.urlencoded());
app.use(express.json());

app.use(session({ secret: "notagoodsecret" }));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const dilemmaRouter = require("./routes/dilemma");
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/dilemma", dilemmaRouter);

// app.get("/", (req, res) => {
//   res.send("welcome to safe haven backend");
// });

app.use(handleErrors);

module.exports = app;
