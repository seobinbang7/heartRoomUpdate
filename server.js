const express = require("express");
const path = require("path");
const app = express();

const http = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(http);

http.listen(8080, function (req, res) {
  console.log("listening on 8080");
});

app.use(express.static(path.join(__dirname, "heartRoomUpdate/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "heartRoomUpdate/build/index.html"));
});

io.on("connection", function (socket) {
  socket.on("room-send", function (data) {
    io.emit("broadcast", { message: data.message });
  });
});

