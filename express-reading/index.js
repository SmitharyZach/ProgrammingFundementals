const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();

const server = http.createServer(app);
const db = require("./db");

console.log(db);
app.get("/", (req, res) => {
  res.send("hello from express");
});

app.get("/friends/", (req, res) => {
  let html = ``;
  html += `<ul>`;
  db.forEach((friend) => {
    html += `<li>
                <a href="${req.path}${friend.handle}">${friend.name}</a>
              </li>`;
  });
  html += `</ul>`;
  res.send(html);
});

app.get("/friends/:handle", (req, res) => {
  const { handle } = req.params;
  const friend = db.find((friend) => friend.handle === handle);
  if (friend) {
    res.send(`
    <h1>${friend.name}</h1>
    <h3>${friend.handle}</h3>
    <h3>${friend.skill}</h3>`);
  } else {
    res.status(404).send(`No user with the handle ${handle}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running HOT`);
});
