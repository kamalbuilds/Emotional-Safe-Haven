const https = require("https");
const http = require("http");
const fs = require("fs");
const config = require("../config");

require("dotenv").config();

const app = require("./app");

const { mongoConnect } = require("./services/mongo");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  // await loadChatUsers();
  await mongoConnect();
  // sockets.listen(socketSever);

  server.listen(config.PORT, config.HOST, () => {
    console.log(`SERVER LISTENING ON http://${config.HOST}:${config.PORT}`);
  });
}

startServer();
