const express = require('express');
const mainRoute = require('./main/main');
const createUser = require('./user/createUser');
const getProducts = require('./products/getProducts');
const getProductById = require('./products/getProductById');
const getUser = require('./user/getUser');
const createOrder = require('./order/createOrder');
const createProduct = require('./products/createProduct');
const updateUser = require('./user/updateUser');
const updateProduct = require('./products/updateProduct');


const apiRoutes = express.Router();

apiRoutes
  .get('/', mainRoute)
  .get('/products', getProducts)
  .get('/products/:id', getProductById)
  .get('/users/:id', getUser)
  .post('/users', createUser)
  .post('/orders/', createOrder)
  .post('/product', createProduct)
  .put('/user/:id', updateUser)
  .put('/products/:id', updateProduct);

module.exports = apiRoutes;
