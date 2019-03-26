const User = require('../../models/user');

const getCurrent = (req, res) => {
  const userId = req.decoded.userId;
  User.findById(userId, onFind);

  function onFind(err, user) {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'No user like that',
      });
      return;
    }
    res.status(200).json({
        status: 'success',
        user: user
    });
  }
};

module.exports = getCurrent;