const express = require("express");
const server = express();
server.use(express.static("/home/dci/folder"));
const port = 3033;
server.listen(port, function () {
    console.log(`server is ok running: ${port}`);
});