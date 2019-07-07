import express from 'express';
import config from './config/env.config';
import bodyParser from 'body-parser';
import router from './config/routes.config';
// Set up the express app
var app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
      return res.send(200);
  } else {
      return next();
  }
});
app.use(bodyParser.json());
router.routesConfig(app);
app.get('/', function (req, res) {
  res.send('hello world')
 })
// basic config
app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`)
});