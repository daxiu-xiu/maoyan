const mongoose = require("mongoose");


const backUsers = new mongoose.Schema({
    //后台用户的姓名
    name: String,
    //后台用户的年龄
    password: String,
    //后台用户的手机号
    backphone: String,
})


mongoose.model("backUsersModel", backUsers, "backUsers");