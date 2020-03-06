var express = require('express');
var router = express.Router();
const {
    film_add,
    get,
    getAny_ten,
    getall,
    getall8,
    del,
    getdata,
    film_update1,
    getFileByState,


} = require("../moveService/filmService");
// 新增电影
router.post('/', async function (req, res, next) {
    const film = req.body;
    const data = await film_add(film);
    res.send(data);
})
// 分页获取电影数据
router.get('/', async function (req, res, next) {
    const film = req.query;
    // console.log("分页",film);
    const data = await get(film);
    res.send(data);
});

//获取所有电影
router.get('/getall', async function (req, res, next) {

    const data = await getall();
    // console.log(data);
    res.send(data);
});

//获取8个电影
router.get('/getall8', async function (req, res, next) {
    const data = await getall8();
    // console.log(data);
    res.send(data);
});


// 榜单，查十个
router.get('/getall_ten', async function (req, res, next) {
   
    const data = await getAny_ten();
    // console.log(data);
    res.send(data);
});

// 删除电影
router.delete("/:_id", async function (req, res, next) {
    const deletefilm = req.params;
    const data = await del(deletefilm);
    res.send(data);
})
// 获取数据渲染到修改页面
router.get("/:_id", async function (req, res, next) {
    const _id = req.params;
    // console.log(_id);
    const data = await getdata(_id);
    res.send(data)
})
// 确认修改
router.post('/updata1', async function (req, res, next) {
    const film = req.body;
    const data = await film_update1(film);
    res.send(data);
})
//根据状态获取电影

router.post('/getFileByState', async function (req, res, next) {
    const data = await getFileByState(req.body);
    res.send(data);
});
module.exports = router;