var express = require("express");
var users = require("./user");
app = express();
var counter = 0;

app.use("/users", users);

app.post("/increment", (req, res, next) => {
  counter++;
  res.send("turned up! " + counter);
});

app.post("/decrement", (req, res, next) => {
  counter--;
  res.send("turned down " + counter);
});

app.get("/value", (req, res, next) => {
  res.send("Counters current value: " + counter);
});

app.listen(3000, () => {
  console.log("server is running wild");
});
