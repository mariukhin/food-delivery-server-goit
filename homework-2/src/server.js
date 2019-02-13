const http = require('http');
const url = require('url');
const getRouteHandler = require('./helpers/get-route-handler');
const morgan = require('morgan');
const router = require('./routes/router');
const fs = require('fs');

const logger = morgan('combined');

const options = {
  cert: fs.readFileSync('src/server.cert'),
  key: fs.readFileSync('src/server.key')
};
const startServer = port => {

  const server = http.createServer(options, (request, response) => {

    // Get route from the request
    const parsedUrl = url.parse(request.url);
    // Get router function
    const func = getRouteHandler(router, parsedUrl.pathname) || router.default;

    logger(request, response, () => func(request, response));
  });

  server.listen(port);
};

module.exports = startServer;
