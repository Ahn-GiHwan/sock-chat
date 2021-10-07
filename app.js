const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Express work!!!!!!");
});

server.listen(port, () => {
  console.log(`Express Server us now listening on localhost:${port}..`);
});
