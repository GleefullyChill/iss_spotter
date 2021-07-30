//index2.js
const { nextISSTimesForMyLocation } = require('./iss_promised');

const printTimes = (passTimes) => {
  for (const flight of passTimes) {
    const flightTime = new Date(0);
    flightTime.setUTCSeconds(flight.risetime);
    const duration = flight.duration;
    console.log(`${flightTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printTimes(passTimes);
  })
  .catch((error) => {
    console.log("They stopped us from telling you 👀", error.message);
  });