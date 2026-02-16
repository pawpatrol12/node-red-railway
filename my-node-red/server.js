const http = require('http');
const RED = require('node-red');
const express = require('express');

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/",
    userDir: "./data",
    flowFile: "flows.json",
    functionGlobalContext: {}
};

const port = process.env.PORT || 1880;

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(port, () => {
    console.log(`Node-RED running on port ${port}`);
});

RED.start();

