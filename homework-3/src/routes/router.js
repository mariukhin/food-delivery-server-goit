const express = require('express');
const mainRoute = require('./main/main');
const saveUser = require('./user/saveUser');
const getProducts = require('./products/getProducts');
const getProductById = require('./products/getProductById');
const getSaveImageHandlers = require('./image/save-image-multipart');
const createUser = require('./user/create-user');

const apiRoutes = express.Router();

apiRoutes
  .get('/', mainRoute)
  .get('/products', getProducts)
  .get('/products/:id', getProductById)
  // .get('/users/:id', getUserById)
  .post('/users', saveUser)
  .post('/image', getSaveImageHandlers());


module.exports = apiRoutes;
