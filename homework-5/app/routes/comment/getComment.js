const Comment = require('../../models/comment');

const getComment = (request, response) => {
  const prodId = request.params.id;
  const sendResponse = (comments) => {
    response.status(200);
    response.json({
      status: 'success',
      Comments: comments
    });
  };
  const sendError = () => {
    response.status(400);
    response.json({
      status: 'error',
      Comments: 'there is no such product'
    });
  };

  const findComment = Comment.find({product: prodId});
  
  findComment
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getComment;
