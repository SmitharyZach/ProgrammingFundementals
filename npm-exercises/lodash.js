var _ = require("lodash");

const shuffle = (cards) => {
  let shuffled = _.shuffle(cards);
  console.log(shuffled);
};

shuffle([1, 2, 3, 4]);

console.log(_.sum([3, 4, 3]));
console.log(_.mean([4, 3, 2, 2, 2]));
