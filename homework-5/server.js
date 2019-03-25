const bodyParser = require('body-parser');
const app = require('./app/modules/app');
const morgan = require('morgan');
const router = require('./app/routes/router');
const config = require('./config');

const errorHandler = (req, res, next)  => {
  res.status(500).send('No such page');
  next();
};

const startServer = port => {
  app
    .set('superSecret', config.secret)
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use('/', router)
    .use(errorHandler);

  app.listen(port);

  console.log('Server was started at http://localhost:' + port);
};

module.exports = startServer;
