const { RSA_NO_PADDING } = require("constants");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// prompt user for a file name
rl.question("Input File ", (answer) => {
  // read the file
  let newContent;
  fs.readFile(`${answer}`, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    newContent = data.toUpperCase();
    console.log(newContent);
    rl.question("Output File: ", (answer) => {
      rl.close();
      fs.writeFile(`${answer}`, newContent, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    });
  });
});

// convert to all caps

//
