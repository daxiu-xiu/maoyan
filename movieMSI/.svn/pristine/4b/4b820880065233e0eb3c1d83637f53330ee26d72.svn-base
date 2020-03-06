const mongoose = require("mongoose");
//定义数据集合结构
const chipSchema = new mongoose.Schema({
    time: String, //上映场次时间
    fares: String, //售票价格
    // cinemaId: {
    //     type: String,
    // },
    // ProjectionsId: {
    //     type: String,
    // },
    filmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'filmModel'
    }, //电影名字

    cinemaId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cinemasModel'
    }, //影院名字

    ProjectionsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProjectionModel'
    } //放映厅名字
})

//定义数据模型
mongoose.model("chipModel", chipSchema, "chip");