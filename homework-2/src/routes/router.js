const mainRoute = require('./main/main');
const getProducts = require('./products/getProducts');

const router = {
  '/products': getProducts,
  default: mainRoute
};

module.exports = router;
