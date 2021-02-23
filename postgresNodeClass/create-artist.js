const promise = require("bluebird");
var prompt = require("prompt-promise");
var res = [];

const initOptions = {
  promiseLib: promise,
};

// Database connectio parameters
const config = {
  host: "localhost",
  port: 5432,
  database: "music",
  user: "postgres",
};

// Load and initialize pg-promise
const pgp = require("pg-promise")(initOptions);

// Create the database instance
const db = pgp(config);

prompt(
  "Create a kick ass playlist! \n 1) Add entire artist catalog \n 2) Add album \n 3) Add a track \n Enter number: "
).then((value) => {
  switch (parseInt(value)) {
    case 1:
      console.log("Chose create artist");
      prompt("Artist Name: ")
        .then(function (value) {
          var query = "INSERT INTO artist (name) VALUES ($1) RETURNING name";
          return db.query(query, value);
        })
        .then((result) => {
          console.log(`Added artist ${result[0].name}`);
        });
      break;
    case 2:
      console.log("Chose add album");
      prompt("Album Name: ")
        .then((value) => {
          res.push(value);
          return prompt("Year Released: ");
        })
        .then((value) => {
          res.push(value);
          return prompt("Artist ID: ");
        })
        .then(function (value) {
          res.push(value);
          var query =
            "INSERT INTO album (title, release_year, artist_id) VALUES ($1, $2, $3) RETURNING title";
          return db.query(query, [res[0], parseInt(res[1]), parseInt(res[2])]);
        })
        .then((result) => {
          console.log(`Added album: ${result[0].title}`);
          prompt.done();
        });
      break;
    case 3:
      prompt("Track Name: ")
        .then((value) => {
          res.push(value);
          return prompt("Album ID: ");
        })
        .then((value) => {
          res.push(value);
          return prompt("Duration (seconds): ");
        })
        .then(function (value) {
          res.push(value);
          var query =
            "INSERT INTO track (name, album_id, duration) VALUES ($1, $2, $3) RETURNING name";
          return db.query(query, [res[0], parseInt(res[1]), parseInt(res[2])]);
        })
        .then((result) => {
          console.log(`Added album: ${result[0].name}`);
          prompt.done();
        });
      break;
    default:
      console.log("I don't recognize that");
      prompt.done();
      break;
  }
});
