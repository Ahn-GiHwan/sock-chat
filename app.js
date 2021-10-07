const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const socketio = require("socket.io");

const port = 3000;

const io = socketio(server);

require("./socket")(io);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/public", express.static(__dirname + "/public"));

const indexRouter = require("./routes/index");
const clubsRouter = require("./routes/clubs");
const chatRouter = require("./routes/chat");

app.use("/", indexRouter);
app.use("/clubs", clubsRouter);
app.use("/chat", chatRouter);

server.listen(port, () => {
  console.log(`Express Server us now listening on localhost:${port}..`);
});
