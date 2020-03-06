const mongoose = require("mongoose");
const filmSchema = new mongoose.Schema({
    //图片 
    images: String,
    //中文名
    cName: String,
    //英文名
    eName: String,
    //电影类型
    type1: String,
    //国家
    country: String,
    //片长
    filmLength: String,
    //上映时间
    showtime: String,
    //导演
    director: String,
    //演员
    actor: String,
    //简介
    synopsis: String,
    //状态
    state: String,

})
mongoose.model("filmModel", filmSchema, "film");