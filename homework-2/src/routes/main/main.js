const mainRoute = (request, response) => {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hi, user!</h1>");
  response.end();

};

module.exports = mainRoute;
