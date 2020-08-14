const express = require('express');
const users = require('./routers/users');
const debug = require('debug')('my-application');

const app = express();

app.use("/api/users",users);

app.listen(3030, (req, res) => {
    debug("服务端运行在3030端口");
})