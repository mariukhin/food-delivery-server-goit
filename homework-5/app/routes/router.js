const express = require('express');
const mainRoute = require('./main/main');
const createUser = require('./user/createUser');
const getAllProducts = require('./products/getAllProducts');
const getProduct = require('./products/getProduct');
const getUser = require('./user/getUser');
const getOrder = require('./order/getOrder');
const createOrder = require('./order/createOrder');
const createProduct = require('./products/createProduct');
const updateUser = require('./user/updateUser');
const updateProduct = require('./products/updateProduct');
const auth = require('./user/auth');
const getCurrent = require('./user/getCurrent');
const verifyToken = require('../modules/check-token');
const createIngredient = require('./ingredients/createIngredient');


const apiRoutes = express.Router();

apiRoutes
  .post('/auth/login', auth)
  .use(verifyToken)
  .get('/', mainRoute)
  .get('/products', getAllProducts)
  .get('/products/:id', getProduct)
  .get('/users/:id', getUser)
  .get('/orders/:id', getOrder)
  // .get('/auth/logout', logout)
  .get('/auth/current', getCurrent)
  .post('/auth/register', createUser)
  .post('/orders', createOrder)
  .post('/products', createProduct)
  .post('/ingredients', createIngredient)
  .put('/users/:id', updateUser)
  .put('/products/:id', updateProduct);

module.exports = apiRoutes;
