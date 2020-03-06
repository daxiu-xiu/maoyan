var express = require('express');
var router = express.Router();
const {
    register,
    login,
    isEixt,
    getUsers,
    delete_users,
    update_users
} = require("../moveService/frontUserServes");
// 注册
router.post("/register", async function (req, res, next) {
    res.send(await register(req.body));
})
// 登录
router.post("/login", async function (req, res, next) { 
    // console.log(await login(req.body));
    
    res.send(await login(req.body));
})
// 验证是否存在
router.post("/isEixt", async function (req, res, next) {
    const data = await isEixt(req.body);
    if (data[0]) {
        // 存在
    res.send(true)
    }else{
        // 不存在
     res.send(false) 
    }
})
// 获取
// 获取用户，分页
router.get('/',async function(req, res, next){
    res.send(await getUsers(req.query));
    });

    // 删除
router.delete('/',async function(req, res, next){

   res.send(await delete_users(req.body))  
    });
router.put('/',async function(req, res, next){
   res.send(await update_users(req.body));
    });
module.exports = router;