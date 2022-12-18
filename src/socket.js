const { Socket } = require("socket.io");

const emailToSocketMapping = new Map();
const socketToEmailMapping = new Map();

function listen(io) {
  io.on("connection", (socket) => {
    console.log("new connection", socket.id);

    socket.on("join-room", (data) => {
      const { roomId, emailId } = data;
      console.log("User", emailId, "Joined Room", roomId);
      emailToSocketMapping.set(emailId, socket.id);
      socketToEmailMapping.set(socket.id, emailId);
      socket.join(roomId);
      socket.emit("joined-room", { roomId });
      socket.broadcast.to(roomId).emit("user-joined", { emailId });
    });

    socket.on("call-user", (data) => {
      const { emailId, offer } = data;
      const fromEmail = socketToEmailMapping.get(socket.id);
      const socketId = emailToSocketMapping.get(emailId);
      socket.to(socketId).emit("incoming-call", { from: fromEmail, offer });
    });

    socket.on("call-accepted", (data) => {
      const { emailId, ans } = data;
      const socketId = emailToSocketMapping.get(emailId);
      socket.to(socketId).emit("call-accepted", { ans });
    });
  });
}

module.exports = {
  listen,
};
