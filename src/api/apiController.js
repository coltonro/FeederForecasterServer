// const fetch = require('node-fetch');
// const NodeCache = require('node-cache');
const staticData = require('./staticData');


const apiController = {}
// const myCache = new NodeCache();

apiController.apiData = async (req, res, next) => {

  const { city } = req.body;
  // const weatherData = myCache.get(`${city}`);
  const weatherData = undefined;
  const todaysDate = new Date().toISOString().split('T')[0];

  // https://www.visualcrossing.com/weather/weather-data-services
  try {
    if (weatherData == undefined || weatherData.days[0].datetime != todaysDate) {
      // const apiData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next2days?unitGroup=us&elements=datetime%2Ctempmax%2Ctempmin%2Cprecip%2Cprecipprob%2Cwindspeed%2Cwinddir%2Ccloudcover&include=days%2Chours&key=4NY853W3F9HGW9M5GW34GFUSR&contentType=json`)
      // const weather = await apiData.json();
      const weather = staticData;

      weather.days.map((day) => {
        return day.hours = day.hours.filter((hour) => {
          return "07:00:00" <= hour.datetime && hour.datetime <= "19:00:00";
        })
      });

      // myCache.set(`${city}`, weather, 86400);
      // console.log('cache set');
      res.locals.weather = weather;
    } else {
      // const weather = myCache.get(`${city}`)
      // console.log('cache hit!: ')
      res.locals.weather = weather;
    }
  }
  catch (err) {
    console.error(`Error in apiController.js: `, err.message);
  }

  next()
}

// exports.apiController = apiController;
module.exports = apiController;