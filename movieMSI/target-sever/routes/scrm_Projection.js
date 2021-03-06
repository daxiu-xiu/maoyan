var express = require('express');
var router = express.Router();

const { addProjection, obtainProjection, removeProjection,getall } = require("../moveService/scrm_ProjectionService.js");


//删除
router.delete('/:_id', async function (req, res, next) {
    res.send(await removeProjection(req.params));
});


//获取分页
router.get('/', async function (req, res, next) {
    res.send(await obtainProjection(req.query));
});



//新增
router.post('/', async function (req, res, next) {
   
    res.send(await addProjection(req.body));
});


//获取所有，用于排片
router.post('/:_id', async function (req, res, next) {
    res.send(await getall(req.params));
});

//通过id获取一个放映厅的明细

module.exports = router;