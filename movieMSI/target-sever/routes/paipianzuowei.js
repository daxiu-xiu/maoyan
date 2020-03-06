var express = require('express');
var router = express.Router();
const {
    getzuowei,
    updateSate
} = require("../moveService/paipianzuoweiService")

//通过排片id座位寻找该场次的所有位置

router.get("/getzuowei", async function (req, res, next) {
    res.send(await getzuowei(req.query));
})

//通过排片的id和座位的id修改状态值
router.post('/updateSate', async function (req, res, next) {
    // console.log(1); 
    // console.log(req.body);
    res.send(await updateSate(req.body));
  });
module.exports = router;