const models = require("./models");

models.user.findAll().then((users) => {
  users.forEach((user) => {
    console.log(user.id, user.firstName);
  });
});
