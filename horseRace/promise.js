const raceTime = () => {
  return Math.floor(Math.random() * 11);
};

const logger = (message) => {
  console.log(message);
};

horses = ["horse1", "horse2", "horse3"];

const startHorses = new Promise((resolve, reject) => {
  resolve(`Off to the races`);
  reject("Rejected!");
});

const horseName = (horsey) => {
  console.log(horsey);
};

//horseRace().then(logger).catch(logger).then(raceTime).then(logger);

const horseRaces = (horsey) => {
  return startHorses
    .then(logger)
    .then(raceTime)
    .then(logger)
    .then(horseName(horsey));
};

const startAllHorses = (horsesArray) => {
  const horses = horsesArray.map((horse) => horseRaces(horse));
  return Promise.all(horses);
};

startAllHorses(horses);
