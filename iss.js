//iss.js
//the logic for fetching
const request = require('request');


const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `"Wow! You're identity is a bit too hidden for this: {response.statusCode} Or maybe try again? ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Sorry, bub: ${response.statusCode}! That's not a city!\n ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      body = JSON.parse(body);
      const geo = {
        latitude: body.latitude,
        longitude: body.longitude
      };
      callback(null, geo);
      return;
    }
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `You have escaped their eye! ${response.statusCode}... Or they just don't want you to know 👀\n ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const flyTimes = JSON.parse(body).response;
      callback(null, flyTimes);
      return;
    }
  });
};
const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordsByIP(ip, (error, geo) => {
      if (error) {
        return callback(error, null);
      }
      fetchISSFlyOverTimes(geo, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, nextPasses);
      });
    });
  });
};

module.exports = {
  nextISSTimesForMyLocation
};

