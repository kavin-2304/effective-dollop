const express = require("express");
const session = require("express-session");
const mongoDbSession = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");

const app = express();
const port = 8080;

const mongoUrl = "mongodb://127.0.0.1:27017/session";
mongoose.connect(mongoUrl)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const store = new mongoDbSession({
  uri: mongoUrl,
  collection: "mySessions",
});

app.use(
  session({
    secret: "key that will sign cookie",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.get("/", (req, res) => {
  req.session.isAuth = true;
  console.log(req.session); // ✅ correct
  res.send("hey its working");
});

app.listen(port, () => {
  console.log("Listening on port :" + port);
});
