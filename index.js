//index.js
//runs our main function
const { nextISSTimesForMyLocation } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Got your Identity! Just kidding, only your IP\n`);
});

fetchCoordsByIP(ip, (error, geo) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('We found out where you live! Well, only your city\n');
});


fetchISSFlyOverTimes(geo, (error, passTimes) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('Big brother is Watching 👁:\n');
});

const printTimes = (passTimes) => {
  for (const flight of passTimes) {
    const flightTime = new Date(0);
    flightTime.setUTCSeconds(flight.risetime);
    const duration = flight.duration;
    console.log(`${flightTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('This is when you can watch them watching you 👁👀:' , printTimes(passTimes));
});