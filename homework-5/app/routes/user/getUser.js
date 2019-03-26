const User = require('../../models/user');

const getUser = (request, response) => {
  const id = request.params.id;
  const sendResponse = (user) => {
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

  const findUser = User.findById(id).populate('favoriteProducts').populate('viewedProducts').populate('orders');
  
  findUser
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getUser;
