const mainRoute = require('./main/main');
const getProducts = require('./products/getProducts');
const signUp = require('./users/signup');

const router = {
  '/signup': signUp,
  '/products': getProducts,
  default: mainRoute
};

module.exports = router;
