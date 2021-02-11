const express = require("express");
const app = express();
const session = require("express-session");
const { use } = require("../express-example/user");

app.use(express.json());

app.use(
  session({
    secret: "tacocat",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 600000 },
  })
);

app.use(function (req, res, next) {
  if (req.session.user) {
    next();
  } else if (req.path == "/") {
    next();
  } else {
    res.redirect("/");
    next();
  }
});

app.use(express.static(__dirname + "/public"));

app.post("/", function (request, response) {
  var username = request.body.username;
  var password = request.body.password;

  if (username == "zach" && password == "1234") {
    console.log(username);
    console.log(password);
    request.session.user = username;
    response.redirect("/admin");
  }
});

app.listen(3000, () => {
  console.log("server running WILD");
});
