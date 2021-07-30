//iss_promised.js
const request = require('request-promise-native');

const fetchMyIP = function() {
  return request(`https://api.ipify.org?format=json'`)
};
const fetchCoordsByIP = function(ip) {
  return request(`https://freegeoip.app/json/${ip}`)
}
const fetchISSFlyOverTimes = function(body) {
  body = JSON.parse(body);
  const geo = {
    latitude: body.latitude,
    longitude: body.longitude
  };
    return request(`http://api.open-notify.org/iss-pass.json?lat=${geo.latitude}&lon=${geo.longitude}`)
}
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then((ip) => fetchCoordsByIP(ip))  
    .then((body) => fetchISSFlyOverTimes(body))
    .then((body) => {
      const passTimes = JSON.parse(body).response
      return passTimes;
    })
}

module.exports = {
  nextISSTimesForMyLocation
}