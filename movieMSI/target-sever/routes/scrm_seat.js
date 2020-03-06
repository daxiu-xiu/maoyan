var express = require('express');
var router = express.Router();


const {
  fang_idshuju,
  seatIdGetSeat,
  shanzuo
} = require("../moveService/scrm_seatService.js")

//通过放映厅的_id,去找到座位
router.get('/:ProjectionId', async function (req, res, next) {
  // console.log(req.params);
  res.send(await fang_idshuju(req.params));
});


//通过放映厅的_id,删除座位
router.delete('/:ProjectionId', async function (req, res, next) {
 
  res.send(await shanzuo(req.params));
});


//通过id找到此座位的明细
router.post('/seatId', async function (req, res, next) {
  // console.log(1); 
  // console.log(req.params);
  res.send(await seatIdGetSeat(req.body));
});


module.exports = router;