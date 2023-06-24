// const fetch = require('node-fetch');
const staticData = require('./staticData');

const apiController = {}

apiController.apiData = async (req, res, next) => {

  const { city } = req.body;

  // https://www.visualcrossing.com/weather/weather-data-services
  try {
      const apiData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next2days?unitGroup=us&elements=datetime%2Ctempmax%2Ctempmin%2Cprecip%2Cprecipprob%2Cwindspeed%2Cwinddir%2Ccloudcover&include=days%2Chours&key=4NY853W3F9HGW9M5GW34GFUSR&contentType=json`)
      const weather = await apiData.json();
      // const weather = staticData;

      // only includes hourly forecast for daylight hours (between 07:00 and 19:00)
      weather.days.map((day) => {
        return day.hours = day.hours.filter((hour) => {
          return "07:00:00" <= hour.datetime && hour.datetime <= "19:00:00";
        })
      });
      res.locals.weather = weather;
  }
  catch (err) {
    console.error(`Error in apiController.js: `, err.message);
  }

  next()
}

module.exports = apiController;