const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const server = http.createServer(app);
const db = require("./db");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/friends/", (req, res) => {
  res.render("friends-list", {
    locals: {
      friends: db,
      path: req.path,
    },
  });
});

app.get("/friends/:handle", (req, res) => {
  const { handle } = req.params;
  const friend = db.find((friend) => friend.handle === handle);
  console.log(friend);
  if (friend) {
    res.render("friend", {
      locals: { friend },
    });
  } else {
    res.status(404).send(`No user with the handle ${handle}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running HOT`);
});
