const https = require('https');
const url = require('url');
const getRouteHandler = require('./helpers/get-route-handler');
const morgan = require('morgan');
const router = require('./routes/router');
const fs = require('fs');

const logger = morgan('combined');

const options = {
  key: fs.readFileSync('src/server.key'),
  cert: fs.readFileSync('src/server.crt'),
  requestCert: false,
  rejectUnauthorized: false
};
const startServer = port => {

  const server = https.createServer(options,(request, response) => {

    // Get route from the request
    const parsedUrl = url.parse(request.url);
    // Get router function
    const func = getRouteHandler(router, parsedUrl.pathname) || router.default;

    logger(request, response, () => func(request, response));
  });

  server.listen(port);
};

module.exports = startServer;
