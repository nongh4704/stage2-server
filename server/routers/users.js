const express = require("express");
const isEmpty = require("lodash/isEmpty");
const validator = require("validator");

const router = express.Router();

const validatorInput = (data) => {
    if(isEmpty(data)){
        data = {};
    }

    var errors = {};
    if(!data.phone || validator.isEmpty(data.phone)){
        errors.phone = "请输入有效的手机号";
    }
    if(!validator.isEmail(data.email)){
        errors.email = "请输入邮箱";
    }
    if(validator.isEmpty(data.password)){
        errors.password = "请输入密码";
    }

    if(!validator.equals(data.password, data.passwordConfirmation)){
        errors.passwordConfirmation = "两次输入的密码不相同";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
}

router.post("/", (req, res) => {
    console.log("req data==", req.body);
    const result = validatorInput(req.body);
    console.log("result",result);
    if(result.isValid){
        res.status(200).json({errorCode: 0});
    }else{
        res.status(400).json({
            errorCode: 400,
            msg: result.errors
        });
    }
});

module.exports = router;