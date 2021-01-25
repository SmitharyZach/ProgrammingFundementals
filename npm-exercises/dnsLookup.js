const dns = require("dns");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a domain for a DNS lookup ", (answer) => {
  dns.lookup(`${answer}`, (err, address, family) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(address, family);
    }
  });

  rl.close();
});
