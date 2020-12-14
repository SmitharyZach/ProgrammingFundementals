const getJSON = (response) => {
  if (response.status === 200) {
    console.log(response);
    return response.json();
  } else {
    throw new Error("Bad status code");
  }
};

const logData = (data) => {
  console.log(data);
  return data;
};

const extractAliases = (character) => {
  const { aliases } = character;
  console.log(aliases);
  return aliases;
};

const printAliases = (aliases) => {
  for (let a of aliases) {
    console.log(a);
  }
  return aliases.length;
};

const reportError = (error) => {
  console.error("There was a mother fucking error!", error);
  return 0;
};

const printSummary = (howMany) => {
  console.log(`We printed ${howMany} aliases`);
};

const promise = new Promise((resolve, reject) => {
  resolve(42);
});

promise.then((value) => console.log(value));

const loadFromStorage = (key) => {
  return new Promise((resolve, reject) => {
    const raw = localStorage.getItem(key);
    if (raw) {
      const data = JSON.parse(raw);
      resolve(data);
    } else {
      reject(key);
    }
  });
};

const retrieveFromAPI = (key) => {
  console.log("hi from retrieve");
  return fetch(`https://anapioficeandfire.com/api/characters/${key}`).then(
    getJSON
  );
};

const fetchHouse = (houseURL) => fetch(`${houseURL}`).then(getJSON);

const retrieveHousesFromAPI = (houses) => {
  console.log(houses);
  const fetchArray = houses.map((houseURL) => fetchHouse(houseURL));
  console.log(fetchArray);
  return Promise.all(fetchArray);
};

const extractHousesFromCharacter = (character) => {
  const { allegiances } = character;
  console.log(allegiances);
  return allegiances;
};

const addHousesToCharacter = (character) => {
  return retrieveHousesFromAPI(extractHousesFromCharacter(character)).then(
    (houseArray) => {
      character.allegiances = houseArray;
      return character;
    }
  );
};

loadFromStorage("583")
  .catch(retrieveFromAPI)
  .then(logData)
  .then(extractHousesFromCharacter)
  .then(retrieveHousesFromAPI)
  .then(addHousesToCharacter);
