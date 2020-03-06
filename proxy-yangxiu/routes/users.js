var express = require('express');
var router = express.Router();
const rp = require("request-promise"); //引用的代理服务器请求依赖
const {
    getEncAse192,getMd5
} = require("../utils/salt");

//注册
//注册
router.post('/register', async (req, res, next) => {
    console.log(req.body);
    const Newpassword = getEncAse192(req.body.password, "etwepthwpet") //etwepthwpet是随机输入的一个用于加密混淆的，必须要和登录的加密混淆一样
    const data = await rp({
      method: "POST",
      uri: "http://localhost:8080/backUsers/register",
      body: {
        name:req.body.name,
        password:Newpassword,
        backphone:req.body.backphone
      },
      json: true
    })
    res.send(data);
  })

//   登录
router.post('/login', async (req, res, next) =>{
const newpassword=getEncAse192(req.body.password, "etwepthwpet");
const data = await rp({
    method: "POST",
    uri: "http://localhost:8080/backUsers/login",
    body: {
      name:req.body.name,
      password:newpassword,
      backphone:req.body.backphone
    },
    json: true
  })
  if(data){
    res.send(true)
    }
    else{
      res.send(false)
    }
})
module.exports = router;