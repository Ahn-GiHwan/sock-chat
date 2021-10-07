const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const port = 3000;

const indexRouter = require("./routes/index");

app.use("/", indexRouter);

server.listen(port, () => {
  console.log(`Express Server us now listening on localhost:${port}..`);
});
