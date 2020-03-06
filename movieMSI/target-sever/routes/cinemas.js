var express = require('express');
var router = express.Router();
const { addCinemaServis, getCinemas, getALL_cinemas, delete_cinema, update_cinema, } = require("../moveService/cinemaServes")
/* GET home page. */
// 增加
router.post('/addcinema', async function (req, res, next) {
    res.send(await addCinemaServis(req.body));
});

// 获取电影院，分页
router.get('/', async function (req, res, next) {
    res.send(await getCinemas(req.query));
});
// 获取所有
router.get('/getALL_cinemas', async function (req, res, next) {
    res.send(await getALL_cinemas(req.query));
});
// 删除
router.delete('/', async function (req, res, next) {
    res.send(await delete_cinema(req.body))
});
router.put('/', async function (req, res, next) {
    res.send(await update_cinema(req.body));

});



module.exports = router;
