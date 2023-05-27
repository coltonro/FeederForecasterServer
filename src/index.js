const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const apiController = require('./api/apiController');
const logicController = require('./api/logicController');
const foodController = require('./api/foodController');

const app = express();
const router = express.Router();
//const PORT = 8080;

app.use(cors({
  origin: ['https://feederforecaster.netlify.app', 'http://localhost:9000']
}));

router.get("/", (req, res) => {
  res.json({'status:': '200'});
});

router.post('/cityForecast', apiController.apiData, logicController.forecast, foodController.foods, (req, res) => {
    res.json(res.locals);
  });

app.use(`/.netlify/functions/index`, router);

module.exports = app;
module.exports.handler = serverless(app);