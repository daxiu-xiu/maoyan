var express = require('express');
var router = express.Router();
const {
    order,
    orderFind,
    updateOrder,
    orderRemove
} = require("../moveService/orderRoomServes")
/* GET home page. */
// 新增
router.post('/order', async function (req, res, next) {
    const data = await order(req.body);
    res.send(data);
});
// 全部获取
router.post('/orderFind', async function (req, res, next) {
    const data = await orderFind(req.body);
    res.send(data);
});
//通过订单的id删除订单
router.post('/updateOrder', async function (req, res, next) {
    const data = await updateOrder(req.body);
    res.send(data);
});
// 删除
router.post('/orderRemove', async function (req, res, next) {
    console.log(req.body);
    const data = await orderRemove(req.body);
    res.send(data);
});
module.exports = router;