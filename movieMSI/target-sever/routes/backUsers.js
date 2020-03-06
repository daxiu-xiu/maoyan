var express = require('express');
var router = express.Router();
const {
    backUsers_sever,
    loginUsers_sever,
    getbackUsers_sever,
    removebackUsers_sever,
    getById_sever,
    changeUer_sever
} = require("../moveService/backUsersServes");
// const {backUsers_sever}=require("../moveService/backUsersServes");
//注册
router.post('/register', async function (req, res, next) {
    const data = await backUsers_sever(req.body);
    res.send(data);
})

//登录
router.post('/login', async function (req, res, next) {
    const data = await loginUsers_sever(req.body);
    res.send(data);
})

//渲染用户名
router.get('/', async function (req, res, next) {
    const data = await getbackUsers_sever(req.query);
    res.send(data);
})

//删除用户
router.delete('/', async function (req, res, next) {
    const data = await removebackUsers_sever(req.body);
    res.send(data);
})

//修改用户
//获取
router.get('/getById', async function (req, res, next) {
    const data = await getById_sever(req.query);
    // console.log(data);
    res.send(data);
})

// 确认修改
router.get('/changeUer', async function (req, res, next) {
    const data = await changeUer_sever(req.query);
    res.send(data);
})
module.exports = router;