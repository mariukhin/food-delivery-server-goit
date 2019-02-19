const fs = require('fs');
const path = require('path');
const util = require('util');
const Generator = require('id-generator')
const g = new Generator();

const usersFolder = path.resolve(__dirname, '../../', 'db/users');

const writeFile = util.promisify(fs.writeFile);

const saveNewUser = (fileName, data) => {
  const src = path.resolve(usersFolder, fileName + '.json');
  const dataStr = JSON.stringify(data);

  return writeFile(src, dataStr);
};
const saveUser = user => {
  const username = user.username;
  const newUser = JSON.stringify(user);
  const filePath = path.join(__dirname, '../../', 'db', 'users');
  fs.writeFile(`${filePath}/${username}.json`, newUser, 'utf8' , function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};
const createUser = (request, response) => {
  const user = request.body;
  const userData = Object.assign({}, user, { id: g.newId()});

  console.log(userData);
  const fileName = userData.username.toLowerCase() + userData.id;

  const sendResponse = () => {
    response.json({
      status: 'success',
      user: userData
  });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'user was not saved'
    });
  };

  saveNewUser(fileName, userData)
    .then(sendResponse)
    .catch(sendError);

};

module.exports = createUser;
