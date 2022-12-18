const https = require("https");
const http = require("http");
const fs = require("fs");
const config = require("../config");
const io = require("socket.io");

require("dotenv").config();

const app = require("./app");

const { mongoConnect } = require("./services/mongo");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

const socketServer = io(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const { listen } = require("./socket");

// io.on("connection", (socket) => {
//   console.log("new connection", socket.id);
//   socket.on("join-room", (data) => {
//     console.log("hi");
//     const { roomId, emailId } = data;
//     console.log("User", emailId, "Joined Room", roomId);
//     emailToSocketMapping.set(emailId, socket.id);
//     socket.join(roomId);
//     socket.broadcast.to(roomId).emit("user-joined", { emailId });
//   });
// });

const sockets = require("./socket");
async function startServer() {
  // await loadChatUsers();
  await mongoConnect();

  sockets.listen(socketServer);
  // sockets.listen(socketSever);

  server.listen(config.PORT, config.HOST, () => {
    console.log(`SERVER LISTENING ON http://${config.HOST}:${config.PORT}`);
  });
}

startServer();
