const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const apiController = require('./api/apiController');
const forecastController = require('./api/forecastController');
const foodController = require('./api/foodController');
const dateController = require('./api/dateController');

const app = express();
const router = express.Router();

app.use(cors({
  origin: ['https://feederforecaster.netlify.app', 'http://localhost:9000', 'http://localhost:5173']
}));

app.use(express.static(process.cwd() + "/dist"));
app.use(express.json());

router.get("/", (req, res) => {
  res.json({ "status:": "200" });
});

router.post('/cityForecast', apiController.apiData, dateController.date, forecastController.forecast, foodController.foods, (req, res) => {
  res.json(res.locals);
});

router.use('*', (req, res) => {
  res.status(404).send("404 Not Found");
});

router.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({"Internal Server Error": err});
});

app.use(`/.netlify/functions/index`, router);

module.exports = app;
module.exports.handler = serverless(app);