const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
let counterValue = 0;

app.use(express.static(__dirname + "/public"));

app.get("/value", (req, res) => {
  console.log("get to value");
  console.log(counterValue);
  res.json(counterValue);
});

app.post("/increment", (req, res) => {
  counterValue++;
  console.log(counterValue);
  res.json(counterValue);
});

app.post("/decrement", (req, res) => {
  counterValue--;
  console.log(counterValue);
  res.json(counterValue);
});

app.listen(port, () => {
  console.log("serving runnin WILD");
});
