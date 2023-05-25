const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const staticData = {
  "weather": {
      "queryCost": 1,
      "latitude": 30.26759,
      "longitude": -97.74299,
      "resolvedAddress": "Austin, TX, United States",
      "address": "$austin",
      "timezone": "America/Chicago",
      "tzoffset": -5,
      "days": [
          {
              "datetime": "2023-05-20",
              "tempmax": 80,
              "tempmin": 67.8,
              "precip": 0.069,
              "precipprob": 100,
              "windspeed": 12.8,
              "winddir": 11.3,
              "cloudcover": 76.1,
              "hours": [
                  {
                      "datetime": "07:00:00",
                      "precip": 0.003,
                      "precipprob": 100,
                      "windspeed": 6.4,
                      "winddir": 342,
                      "cloudcover": 91.5
                  },
                  {
                      "datetime": "08:00:00",
                      "precip": 0,
                      "precipprob": 0,
                      "windspeed": 7.1,
                      "winddir": 20,
                      "cloudcover": 100
                  },
                  {
                      "datetime": "09:00:00",
                      "precip": 0,
                      "precipprob": 0,
                      "windspeed": 10.2,
                      "winddir": 14,
                      "cloudcover": 100
                  },
                  {
                      "datetime": "10:00:00",
                      "precip": 0,
                      "precipprob": 0,
                      "windspeed": 8.5,
                      "winddir": 14,
                      "cloudcover": 100
                  },
                  {
                      "datetime": "11:00:00",
                      "precip": 0,
                      "precipprob": 0,
                      "windspeed": 9.2,
                      "winddir": 20,
                      "cloudcover": 99.3
                  },
                  {
                      "datetime": "12:00:00",
                      "precip": 0,
                      "precipprob": 0,
                      "windspeed": 9.5,
                      "winddir": 359,
                      "cloudcover": 100
                  },
                  {
                      "datetime": "13:00:00",
                      "precip": 0.012,
                      "precipprob": 5,
                      "windspeed": 12.8,
                      "winddir": 10,
                      "cloudcover": 83
                  },
                  {
                      "datetime": "14:00:00",
                      "precip": 0,
                      "precipprob": 5,
                      "windspeed": 11.4,
                      "winddir": 10,
                      "cloudcover": 74
                  },
                  {
                      "datetime": "15:00:00",
                      "precip": 0,
                      "precipprob": 5,
                      "windspeed": 10.3,
                      "winddir": 10,
                      "cloudcover": 66
                  },
                  {
                      "datetime": "16:00:00",
                      "precip": 0,
                      "precipprob": 6,
                      "windspeed": 10.3,
                      "winddir": 10,
                      "cloudcover": 57
                  },
                  {
                      "datetime": "17:00:00",
                      "precip": 0,
                      "precipprob": 6,
                      "windspeed": 10.3,
                      "winddir": 10,
                      "cloudcover": 54
                  },
                  {
                      "datetime": "18:00:00",
                      "precip": 0,
                      "precipprob": 6,
                      "windspeed": 9.2,
                      "winddir": 20,
                      "cloudcover": 50
                  },
                  {
                      "datetime": "19:00:00",
                      "precip": 0,
                      "precipprob": 4,
                      "windspeed": 8.1,
                      "winddir": 20,
                      "cloudcover": 47
                  }
              ]
          },
          {
              "datetime": "2023-05-21",
              "tempmax": 76.9,
              "tempmin": 65.9,
              "precip": 0,
              "precipprob": 12,
              "windspeed": 8.1,
              "winddir": 21,
              "cloudcover": 70.1,
              "hours": [
                  {
                      "datetime": "07:00:00",
                      "precip": 0,
                      "precipprob": 12,
                      "windspeed": 6.9,
                      "winddir": 0,
                      "cloudcover": 87
                  },
                  {
                      "datetime": "08:00:00",
                      "precip": 0,
                      "precipprob": 12,
                      "windspeed": 5.8,
                      "winddir": 10,
                      "cloudcover": 86
                  },
                  {
                      "datetime": "09:00:00",
                      "precip": 0,
                      "precipprob": 12,
                      "windspeed": 5.8,
                      "winddir": 10,
                      "cloudcover": 84
                  },
                  {
                      "datetime": "10:00:00",
                      "precip": 0,
                      "precipprob": 12,
                      "windspeed": 5.8,
                      "winddir": 20,
                      "cloudcover": 83
                  },
                  {
                      "datetime": "11:00:00",
                      "precip": 0,
                      "precipprob": 12,
                      "windspeed": 5.8,
                      "winddir": 30,
                      "cloudcover": 85
                  },
                  {
                      "datetime": "12:00:00",
                      "precip": 0,
                      "precipprob": 12,
                      "windspeed": 6.9,
                      "winddir": 30,
                      "cloudcover": 87
                  },
                  {
                      "datetime": "13:00:00",
                      "precip": 0,
                      "precipprob": 5,
                      "windspeed": 8.1,
                      "winddir": 30,
                      "cloudcover": 89
                  },
                  {
                      "datetime": "14:00:00",
                      "precip": 0,
                      "precipprob": 5,
                      "windspeed": 8.1,
                      "winddir": 30,
                      "cloudcover": 79
                  },
                  {
                      "datetime": "15:00:00",
                      "precip": 0,
                      "precipprob": 5,
                      "windspeed": 6.9,
                      "winddir": 30,
                      "cloudcover": 70
                  },
                  {
                      "datetime": "16:00:00",
                      "precip": 0,
                      "precipprob": 5,
                      "windspeed": 5.8,
                      "winddir": 30,
                      "cloudcover": 60
                  },
                  {
                      "datetime": "17:00:00",
                      "precip": 0,
                      "precipprob": 5,
                      "windspeed": 5.8,
                      "winddir": 30,
                      "cloudcover": 53
                  },
                  {
                      "datetime": "18:00:00",
                      "precip": 0,
                      "precipprob": 5,
                      "windspeed": 5.8,
                      "winddir": 40,
                      "cloudcover": 45
                  },
                  {
                      "datetime": "19:00:00",
                      "precip": 0,
                      "precipprob": 3,
                      "windspeed": 5.8,
                      "winddir": 40,
                      "cloudcover": 38
                  }
              ]
          },
          {
              "datetime": "2023-05-22",
              "tempmax": 83.9,
              "tempmin": 63.1,
              "precip": 0,
              "precipprob": 7,
              "windspeed": 6.9,
              "winddir": 74.9,
              "cloudcover": 33.9,
              "hours": [
                  {
                      "datetime": "07:00:00",
                      "precip": 0,
                      "precipprob": 6,
                      "windspeed": 3.4,
                      "winddir": 20,
                      "cloudcover": 35
                  },
                  {
                      "datetime": "08:00:00",
                      "precip": 0,
                      "precipprob": 6,
                      "windspeed": 3.8,
                      "winddir": 33.3,
                      "cloudcover": 33.7
                  },
                  {
                      "datetime": "09:00:00",
                      "precip": 0,
                      "precipprob": 6,
                      "windspeed": 4.3,
                      "winddir": 46.7,
                      "cloudcover": 32.3
                  },
                  {
                      "datetime": "10:00:00",
                      "precip": 0,
                      "precipprob": 6,
                      "windspeed": 4.7,
                      "winddir": 60,
                      "cloudcover": 31
                  },
                  {
                      "datetime": "11:00:00",
                      "precip": 0,
                      "precipprob": 7,
                      "windspeed": 5.1,
                      "winddir": 70,
                      "cloudcover": 33.3
                  },
                  {
                      "datetime": "12:00:00",
                      "precip": 0,
                      "precipprob": 7,
                      "windspeed": 5.4,
                      "winddir": 80,
                      "cloudcover": 35.7
                  },
                  {
                      "datetime": "13:00:00",
                      "precip": 0,
                      "precipprob": 7,
                      "windspeed": 5.8,
                      "winddir": 90,
                      "cloudcover": 38
                  },
                  {
                      "datetime": "14:00:00",
                      "precip": 0,
                      "precipprob": 7,
                      "windspeed": 6.3,
                      "winddir": 93.3,
                      "cloudcover": 36
                  },
                  {
                      "datetime": "15:00:00",
                      "precip": 0,
                      "precipprob": 7,
                      "windspeed": 6.5,
                      "winddir": 96.7,
                      "cloudcover": 34
                  },
                  {
                      "datetime": "16:00:00",
                      "precip": 0,
                      "precipprob": 7,
                      "windspeed": 6.9,
                      "winddir": 100,
                      "cloudcover": 32
                  },
                  {
                      "datetime": "17:00:00",
                      "precip": 0,
                      "precipprob": 2,
                      "windspeed": 6.9,
                      "winddir": 103.3,
                      "cloudcover": 30.3
                  },
                  {
                      "datetime": "18:00:00",
                      "precip": 0,
                      "precipprob": 2,
                      "windspeed": 6.9,
                      "winddir": 106.7,
                      "cloudcover": 28.7
                  },
                  {
                      "datetime": "19:00:00",
                      "precip": 0,
                      "precipprob": 2,
                      "windspeed": 6.9,
                      "winddir": 110,
                      "cloudcover": 27
                  }
              ]
          }
      ]
  },
  "forecast": [
      {
          "activity": "moderate",
          "tempmax": 80,
          "cloudcover": "partly cloudy",
          "windspeed": "light",
          "precipprob": 100,
          "description": "With a high chance of rain, expect birds to visit your feeders shortly after the rain stops. You may see a burst of activity in the 1 - 2 hours after the rain stops."
      },
      {
          "activity": "low",
          "tempmax": 76.9,
          "cloudcover": "partly cloudy",
          "windspeed": "low",
          "precipprob": 12,
          "description": "Activity may be good early morning, but otherwise will likely be low due to sun and warmer temperatures."
      },
      {
          "activity": "low",
          "tempmax": 83.9,
          "cloudcover": "partly cloudy",
          "windspeed": "low",
          "precipprob": 7,
          "description": "Activity may be good early morning, but otherwise will likely be low due to sun and warmer temperatures."
      }
  ],
  "foods": [
      {
          "title": "Sunflower",
          "desc": "High quality protein",
          "imgPath": "/sunflowerseeds.jpg",
          "details": "Blackoil sunflower is a favorite of cardinals, but other seed-eaters like chickadees and titmice like it too. De-shelled seeds are most attractive, especially to small birds, but cost 20% - 30% more. "
      },
      {
          "title": "Nectar",
          "desc": "Energy for Hummingbirds",
          "imgPath": "/hummingbird_feeder.png",
          "details": "Nectar details go here."
      },
      {
          "title": "Water",
          "desc": "Attracts a great variety of birds.",
          "imgPath": "/bird_bath_robin.png",
          "details": "Water details go here."
      },
      {
          "title": "Millet",
          "desc": "A favorite of Buntings.",
          "imgPath": "",
          "details": "Millet details go here."
      }
  ]
}

router.get("/", (req, res) => {
  res.json({
    forecast: "birds incoming!"
  });
});

router.post("/cityForecast", (req, res) => {
  res.json(staticData);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
