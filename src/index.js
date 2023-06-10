const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const apiController = require('./api/apiController');
const forecastController = require('./api/forecastController');
const foodController = require('./api/foodController');
const birdsController = require('./api/birdsController');
const dateController = require('./api/dateController');

const app = express();
const router = express.Router();

app.use(cors({
  origin: ['https://feederforecaster.netlify.app', 'http://localhost:9000', 'http://localhost:5173']
}));

app.use(express.static(process.cwd()+"/client/dist"));
app.use(express.json());

router.get("/", (req, res) => {
    console.log('get response sent');
  res.json({'status:': '200'});
});

router.post('/cityForecast', apiController.apiData, dateController.date, forecastController.forecast, foodController.foods, birdsController.birds, (req, res) => {
    res.json(res.locals);
  });

app.use(`/.netlify/functions/index`, router);

module.exports = app;
module.exports.handler = serverless(app);