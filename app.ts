import createError from "http-errors"
import express from "express";
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var usersRouter = require("./routes/problems");

const app = express();
const isProd = (process.env.NODE_ENV || "development") === "production";
const indexPath = isProd ? "../client/build" : "client/build";
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, indexPath)));

app.use("/api/problems", usersRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, indexPath, "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
