const startServer = require('./server');
const connectToDB = require('./app/modules/connect-db');
const { port, databaseUrl } = require('./config');

startServer(port);
connectToDB(databaseUrl);
