const qs = require('querystring');
const fs = require('fs');
const path = require('path');

const user = {
  username: "Max",
  telephone: "063 723 77 77",
  password: "1234225",
  email: "hhshhsh.max@gmail.com"
}
const saveUser = user => {
  
  const destination = path.join( __dirname, '../../', 'db', 'users', );
  source.pipe(dest);
  // получить файл с юзером
  // найти путь папки users
  // сохранить туда файл
};

const signUpRoute = (request, response) => {
  // Взять данные что пришли
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello dkkkk!</h1>");
  response.end();

  const userName = user.username;
  const newUser = JSON.stringify(user);
  fs.appendFile(`${userName}.json`, newUser, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  saveUser(user);
  if (request.method === 'POST') {
    let body = '';

    request.on('data', function (data) {
      body += data;

      console.log('Incoming data!!!!');
    });

    request.on('end', function () {
      const post = qs.parse(body);
      console.log(post);
    });
  }

  // Взять username с данных, сохранить в переменную

  // Сохраняем данные в <username>.json

  // Сохранить <username>.json в папку users

  // Отправляем файл в ответе с данными юзера
  // использовать response
};

module.exports = signUpRoute;