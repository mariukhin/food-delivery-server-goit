const Product = require('../../models/product');

const getAllProducts = (request, response) => {
  const sendResponse = (product) => {
    response.status(200);
    response.json(product);
  };

  Product
    .find()
    .then(sendResponse)
    .catch(err => {
      console.error(err)
    });
};

module.exports = getAllProducts;
