var express = require('express');
var router = express.Router();

const {
    addchip,
    delchip,
    getChipByPage,
    getall,
    getOneChip,
    updateChip,
    getFilmBycinemaId,
    getChipByCF,
    getChipGiveWangZhan,
    getYingyuanSomall,
    getOneChipByfilm,
    getChipTime,
    getSomall,
    getdypai,
    comepp,
    getChipIdquanbu


    
} = require("../moveService/chipService")

//根据分页获取排片渲染页面
router.get('/', async function (req, res, next) {
    const data = await getChipByPage(req.query);
    res.send(data);
});


//新增排片
router.post("/", async function (req, res, next) {
    const data = await addchip(req.body);
    res.send(data);
})


//删除排片
router.delete("/:_id", async function (req, res, next) {
    const data = await delchip(req.params);
    res.send(data);
})


//获取数据库所有排片
router.get('/getAllChip', async function (req, res, next) {

    const data = await getall();

    res.send(data);
});

//通过id去获取一个场次
router.get("/getChipId", async function (req, res, next) {
    const _id = req.query;
    // console.log(getOne)
    const data = await getOneChip(_id);
    res.send(data)
})

//通过id获取所有数据
router.get("/getChipIdquanbu", async function (req, res, next) {
    const _id = req.query;
    // console.log(getOne)
    const data = await getChipIdquanbu(_id);
    res.send(data)
})

//确认修改事件，通过id去修改一个场次
router.patch("/", async function (req, res, next) {
    // console.log(1111)
    res.send(await updateChip(req.body))
})

//查询事件。通过电影的Id俩查询已经排了此电影的影院￥

//通过影院和电影的id来找相关场次和所有数据
router.post("/dypai", async function (req, res, next) {
    // console.log(req.body);
    const data = await getdypai(req.body);
    res.send(data);
})




router.post("/come", async function (req, res, next) {
    // console.log(req.body);
    const data = await comepp(req.body);
    res.send(data);
})



//查询事件。通过电影的Id俩查询已经排了此电影的影院
router.post("/:_id", async function (req, res, next) {
    const _id = req.params;
    // console.log(_id)
    const data = await getOneChipByfilm(_id);
    res.send(data)
})


// //通过电影和影院的id来查询是时间
router.get("/gettime", async function (req, res, next) {
    // console.log(req.query)
    const data = await getChipTime(req.query);
    res.send(data);
})

//通过影院的id拿影院的明细和此影院排了的所有电影
router.get("/getFilmBycinemaId", async function (req, res, next) {
    // console.log(req.query)
    const data = await getFilmBycinemaId(req.query);
    res.send(data);
})

//通过电影院的id和电影的id获取所排片的场次
router.get("/getChipByCF", async function (req, res, next) {
    // console.log(req.query)
    const data = await getChipByCF(req.query);
    res.send(data);
})


//通过排片的id获取所有的信息（供猫眼网站使用网站）
router.get("/getChipGiveWangZhan", async function (req, res, next) {
    // console.log(req.query)
    const data = await getChipGiveWangZhan(req.query);
    res.send(data);
})

   //一进来就渲染所有所有影院。并且把影院的最低价显示出来
   router.get("/getYingyuanSomall", async function (req, res, next) {
    // console.log(req.query)
    const data = await getYingyuanSomall(req.query);
    res.send(data);
})


//通过电影的id再寻 找排了此电影的影院,且只返回最小的
router.get("/getSomall", async function (req, res, next) {
    // console.log(req.query)
    const data = await getSomall(req.query);
    res.send(data);
})
module.exports = router;