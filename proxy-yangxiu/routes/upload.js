var express = require('express');
var router = express.Router();

const rq = require("request-promise");

const {
    uploadFiles,
    moveFiles,
    removeFiles,
    copyFiles
} = require("../utils/uploadFiles.js");

const m = uploadFiles({
    path: "./public/upload/temp",
    key: "file"
})

//上传新增
router.post("/temp", m, function (req, res, next) {
    res.send(req.files.map(item => item.filename));
})
router.post("/xin", async function (req, res, next) {
    const {
        cName,
        eName,
        type1,
        country,
        filmLength,
        showtime,
        director,
        actor,
        synopsis,
        state,
        images
    } = req.body;

    moveFiles({
        fromPath: './public/upload/temp',
        toPath: './public/upload/images',
        filename: images
    })
    copyFiles({
        fromPath: './public/upload/images',
        toPath: '../../proxy-geren/public/images',
        filename:images
    })
    const data = await rq({
        method: "post",
        url: "http://localhost:8080/film",
        body: {
            cName,
            eName,
            type1,
            country,
            filmLength,
            showtime,
            director,
            actor,
            synopsis,
            state,
            images
        },
        json: true
    })
    removeFiles('./public/upload/temp');
    res.send(data);
})
// 上传修改
router.post("/xiu", async function (req, res, next) {
    const {
        cName,
        eName,
        type1,
        country,
        filmLength,
        showtime,
        director,
        actor,
        synopsis,
        state,
        images
    } = req.body;
    moveFiles({
        fromPath: './public/upload/temp',
        toPath: './public/upload/images',
        filename: images
    })
    const data = await rq({
        method: "post",
        url: "http://localhost:8080/film",
        body: {
            cName,
            eName,
            type1,
            country,
            filmLength,
            showtime,
            director,
            actor,
            synopsis,
            state,
            images
        },
        json: true
    })
    removeFiles('./public/upload/temp');
    res.send(data);
})

router.post("/changeImg", async function (req, res, next) {
    const {
        _id,
        cName,
        eName,
        type1,
        country,
        filmLength,
        showtime,
        director,
        actor,
        synopsis,
        state,
        images
    } = req.body;
    moveFiles({
        fromPath: './public/upload/temp',
        toPath: './public/upload/images',
        filename: images
    })
    const data = await rq({
        method: "post",
        url: "http://localhost:8080/film/updata1",
        body: {
            _id,
            cName,
            eName,
            type1,
            country,
            filmLength,
            showtime,
            director,
            actor,
            synopsis,
            state,
            images
        },
        json: true
    })
    removeFiles('./public/upload/temp');
    res.send(data);
})

module.exports = router;