//index.js
//runs our main function
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   console.log('Got your Identity! Just kidding, only your IP:' , ip);
// });
// fetchCoordsByIP((error, geo) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log('We found out where you live! Well, only your city:' , geo);
// });