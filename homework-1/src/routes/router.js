const mainRoute = require('./main/main');
const getProducts = require('./products/getProducts');
const signUpRoute = require('./users/sign-up-route');

const router = {
  '/signup': signUpRoute,
  '/products': getProducts,
  default: mainRoute
};

module.exports = router;
