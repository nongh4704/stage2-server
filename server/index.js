const express = require('express');
const users = require('./routers/users');
const auth = require("./routers/auth");
const debug = require('debug')('my-application');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use("/api/users",users);
app.use("/api/auth",auth);

app.listen(3030, (req, res) => {
    debug("服务端运行在3030端口");
})