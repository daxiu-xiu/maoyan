var express = require('express');
var router = express.Router();
// 用于服务端与目标服务器发送数据
const rp = require("request-promise");
const {
    getEncAse192
} = require("../utils/salt");
// 注册
router.post('/',async function(req, res, next) {
const newPassword=getEncAse192(req.body.password,"etwepthwpet");//秘钥
console.log(newPassword);
// 发送数据
const data=await rp({
    method:"POST",
    // 目标端口
    uri:"http://localhost:8080/frontUsers/register",
    body:{
        front_name:req.body.usersName,
        front_password:newPassword,
        front_gender:req.body.gender,
        front_age:req.body.age,
        front_phone:req.body.usersPhone },
        json:true
    })
    res.send(data);
});
// 登录
router.post('/login',async function(req, res, next) {
const newPassword=getEncAse192(req.body.password,"etwepthwpet");//秘钥
// 发送数据
const data=await rp({
    method:"POST",
    // 目标端口
    uri:"http://localhost:8080/frontUsers/login",
    body:{
        front_name:req.body.usersName,
        front_password:newPassword, },
        json:true
    })
    res.send(data);
});

module.exports = router;
