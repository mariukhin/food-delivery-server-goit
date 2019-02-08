const fs = require('fs');
const path = require('path');

const saveUser = user => {
  const username = user.username;
  const newUser = JSON.stringify(user);
  const filePath = path.join(__dirname, '../../', 'db', 'users');
  fs.writeFile(`${filePath}/${username}.json`, newUser, 'utf8' , function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
};

const signUp = (request, response) => {
  if (request.method === 'POST') {
    let body = '';

    request.on('data', function (data) {
      body += data;
    });

    request.on('end', function () {
      let post = JSON.parse(body);
      saveUser(post);
      const finalResult = {
          status: 'success',
          user: post
      }
      response.writeHead(200, {"Content-type": "application/json"});
      response.write(JSON.stringify(finalResult));
      response.end();
    });
  }
};

module.exports = signUp;