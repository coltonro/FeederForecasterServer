const forecastController = {}

forecastController.forecast = async (req, res, next) => {
  // important values: temp, cloud cover, chance precip., month
  // helpful wind direct chart: 
  // https://www.researchgate.net/figure/Wind-Direction-and-Degree-Values_fig16_264876359
  const determineWindDirection = (winddir) => {
    if (winddir > 337.5 && winddir < 22.5) return "north";
    if (winddir >= 22.5 && winddir < 67.5) return "northeast";
    if (winddir >= 67.5 && winddir < 112.5) return "east";
    if (winddir >= 112.5 && winddir < 157.5) return "southeast";
    if (winddir >= 157.5 && winddir < 202.5) return "south";
    if (winddir >= 202.5 && winddir < 247.5) return "southwest";
    if (winddir >= 247.5 && winddir < 292.5) return "west";
    if (winddir >= 292.5 && winddir < 337.5) return "northwest";
  }

  const predictFeederActivity = (tempmax, cloudcover, windspeed, precipprob) => {
    // set sky as clear, partly cloudy, or cloudy
    const sky = cloudcover < 20 ? 'sunny' : cloudcover < 80 ? 'partly cloudy' : 'cloudy';
    const wind = windspeed < 10 ? 'low' : windspeed <= 14 ? 'light' : 'windy';

    // high temp
    if (tempmax > 84) return {
      activity: 'low',
      tempmax: tempmax,
      cloudcover: sky,
      windspeed: wind,
      precipprob: precipprob,
      description: `With a high of ${tempmax}, birds will spend much of their day resting in the shade.
      ${"\n"} Activity may spike in the cooler early morning hours, but as temperatures climb, birds will fall silent and remain mostly inactive.`
    }
    // warm with rain
    if (tempmax > 70 && tempmax < 84 && precipprob > 76) return {
      activity: 'moderate',
      tempmax: tempmax,
      cloudcover: sky,
      windspeed: wind,
      precipprob: precipprob,
      description: `With a ${precipprob}% chance of rain in your region, expect birds to see birds shortly after the rain stops. You may see a burst of activity in the 1 - 2 hours after the rain stops, especially after a moderate or heavy rain. Consider bringing exposed bird seed inside to keep dry, but hanging it back quickly to catch the after-rain activity.`
    }
    // warm, low wind, overcast, no rain
    if (tempmax > 70 && tempmax < 84 && cloudcover >= 80 && windspeed < 14 && precipprob <= 20) return {
      activity: 'moderate',
      tempmax: tempmax,
      cloudcover: sky,
      windspeed: wind,
      precipprob: precipprob,
      description: `Cloudy skies will encourage prolonged bird activity, especially in the mid to late morning hours. Afternoon feeder activity will likely be sporadic, ranging from low to moderate.`
    }
    // warm, sunny, no rain
    if (tempmax > 70 && cloudcover < 75 && precipprob <= 20) return {
      activity: 'low',
      tempmax: tempmax,
      cloudcover: sky,
      windspeed: wind,
      precipprob: precipprob,
      description: `Activity may be good early morning, but otherwise will likely be low due to sun and warmer temperatures.`
    }
    // cold with high winds
    if (tempmax <= 50 && windspeed >= 14) return {
      activity: 'moderate',
      tempmax: tempmax,
      cloudcover: sky,
      windspeed: wind,
      description: `Wind may decrease activity at your feeders, but lower temperatures may still drive birds to eat to replenish body fat stores.`
    };
    // cold
    if (tempmax <= 45) return {
      activity: 'high',
      tempmax: tempmax,
      cloudcover: sky,
      windspeed: wind,
      description: `With a high of ${tempmax}${'&deg;F'}, chilly weather will cause birds to aggresively seek food as their bodies burn calories to stay warm.
      ${'\n'} Expect frequent bursts of high feeder activity throughout the day.`
    };
    // high winds
    if (windspeed <= 20) return {
      activity: 'low',
      tempmax: tempmax,
      cloudcover: sky,
      windspeed: wind,
      description: `With windspeeds forecasted at ${windspeed} mph, expect bird activity to be heavily surpressed due to high winds.`
    };
    // high temps 46 - 60, low wind, some clouds
    if (tempmax <= 60 && tempmax >= 46 && cloudcover >= 60 && windspeed <= 10) return {
      activity: 'high',
      tempmax: tempmax,
      cloudcover: sky,
      windspeed: wind,
      description: `With cooler temperatures and lower wind speed, expect moderate to high feeder activity on and off throughout the day.`
    };
    return {
      activity: 'N/A',
      tempmax: tempmax,
      cloudcover: sky,
      windspeed: wind,
      description: ''
    };
  }

  try {
    const weatherForecast = res.locals.weather.days
    console.log('**res.locals.weather: ', res.locals.weather)
    const predictionValues = weatherForecast.map((day) => {
      const tempmax = day.tempmax;
      const cloudcover = day.cloudcover;
      const windspeed = day.windspeed;
      const precipprob = day.precipprob;
      return predictFeederActivity(tempmax, cloudcover, windspeed, precipprob)
    })
    res.locals.forecast = predictionValues;

  } catch (err) {
    console.error("Error in forecastController.forecast: ", err.message);
    next(err);
  }
  next()
}

module.exports = forecastController;