const User = require('../../db/schemas/user');
const Product = require('../../db/schemas/product');

const getUser = (request, response) => {
  const id = request.params.id;
  const sendResponse = ([user, product]) => {
    response.status(200);
    response.json({
      status: 'success',
      user: user
    });
  };
  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      text: 'there is no such user'
    });
  };
  const findUser = User.findById(id);
  const findProduct = Product.findById(id);

  Promise.all([findUser, findProduct])
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getUser;
