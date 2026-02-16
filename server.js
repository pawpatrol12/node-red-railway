const express = require("express");
const RED = require("node-red");

const app = express();
const server = require("http").createServer(app);

const settings = {
  httpAdminRoot: "/",
  httpNodeRoot: "/api",
  userDir: "./.node-red",
  functionGlobalContext: {},
};

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

const PORT = process.env.PORT || 1880;

server.listen(PORT, "0.0.0.0", () => {
  console.log("Node-RED running on port " + PORT);
});

RED.start();
