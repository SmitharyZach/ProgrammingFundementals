const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();

const morgan = require("morgan");
const logger = morgan("tiny");

const helmet = require("helmet");

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const server = http.createServer(app);
const db = require("./db");

app.use(helmet());
app.use(logger);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("home", {
    locals: {
      title: "Address book",
    },
    partials: {
      head: "/partials/head",
    },
  });
});

app.get("/friends/", (req, res) => {
  res.render("friends-list", {
    locals: {
      friends: db,
      path: req.path,
      title: "Friends List",
    },
    partials: {
      head: "/partials/head",
    },
  });
});

app.get("/friends/:handle", (req, res) => {
  const { handle } = req.params;
  const friend = db.find((friend) => friend.handle === handle);
  console.log(friend);
  if (friend) {
    res.render("friend", {
      locals: {
        title: `${friend.name}'s info`,
        friend,
      },
      partials: {
        head: "/partials/head",
      },
    });
  } else {
    res.status(404).send(`No user with the handle ${handle}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running HOT`);
});
