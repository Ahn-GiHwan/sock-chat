const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const port = 3000;

const indexRouter = require("./routes/index");
const clubsRouter = require("./routes/clubs");

app.use("/", indexRouter);
app.use("/clubs", clubsRouter);

server.listen(port, () => {
  console.log(`Express Server us now listening on localhost:${port}..`);
});
