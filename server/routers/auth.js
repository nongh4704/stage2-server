const express = require("express");

const sqlFn = require("../mysql");

const router = express.Router();

router.post("/", function(req, res){
    var sql = "select * from users where phone = ? && password = ?";
    var arr = [req.body.phone, req.body.password];
    sqlFn(sql, arr, function(data){
        if(res){
            res.send({errorCode: 0, msg: "登录成功"});
        }else{
            res.send({errorCode: -1, msg: "用户名或密码错误"});
        }
    });
})

module.exports = router;