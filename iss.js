//iss.js
//the logic for fetching
const request = require('request');


// const fetchMyIP = function(callback) {
//   request(`https://api.ipify.org?format=json`, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }
//       if (response.statusCode !== 200) {
//         const msg = `"Wow! You're identity is a bit too hidden for this: {response.statusCode} Or maybe try again? ${body}`;
//         callback(Error(msg), null);
//         return;
//       }
//       const ip = JSON.parse(body).ip
//       callback(null, ip);
//   });
// };

// const fetchCoordsByIP = function(callback) {
//   request(`https://freegeoip.app/json/198.166.96.16`, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Sorry, bub: ${response.statusCode}!\n ${body}`;
//       callback(Error(msg), null);
//       return;
//     } else {
//       body = JSON.parse(body);
//       const geo = {
//         latitude: body.latitude,
//         longitude: body.longitude
//       };
//       callback(null, geo);
//       return;
//     }
//   });
// };

module.exports = {
  //fetchCoordsByIP
  //fetchMyIP
};

