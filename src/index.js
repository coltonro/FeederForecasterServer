const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const apiController = require('./api/apiController');
const dateController = require('./api/dateController')
const forecastController = require('./api/forecastController');
const foodController = require('./api/foodController');

const app = express();
const router = express.Router();

app.use(cors({
  origin: ['https://feederforecaster.netlify.app', 'http://localhost:9000', 'http://localhost:5173']
}));

app.use(express.static(process.cwd() + "/dist"));
app.use(express.json());
app.use(`/.netlify/functions/index`, router);

router.get("/", (req, res) => {
  res.send("Server is live!");
});

router.post('/cityForecast', apiController.apiData, dateController.date, forecastController.forecast, foodController.foods, (req, res) => {
  res.json(res.locals);
});

router.use('*', (req, res) => {
  res.status(404).send("404 Not Found");
});

app.use((error, req, res, next) => {
  res.status(500)
  res.send({error: error, resError: res.error})
  console.error(error.stack)
  next(error)
})

module.exports = app;
module.exports.handler = serverless(app);