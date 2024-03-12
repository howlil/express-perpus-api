const express = require("express");
const app = express();
const http = require("http");
const port = 5000;

const requestHandler = (req, res) => {
  console.log(req.url);
  res.end("hello");
};

let server = http.createServer(requestHandler);
server.listen(port, () =>
  console.log(`Server started, listening on port ${port}.`)
);

module.exports = app;
