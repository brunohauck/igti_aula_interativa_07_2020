const jsonServer = require("json-server");
const server = jsonServer.create();
//const router = jsonServer.router('todos.json')
var router = jsonServer.router(require("./db.js")());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
