const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000; //  chose port from here like 5000, 3001

server.use(middlewares);
server.use(router);

server.listen(port);