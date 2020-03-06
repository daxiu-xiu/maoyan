const mongoose = require("mongoose");
// 注册
module.exports.backUserrsDao=async function(users){
    const data = await mongoose.model("backUsersModel").create(users);
    return data
}

//登录
module.exports.loginkUserrsDao=async function(users){
    const data=await mongoose.model("backUsersModel").find(users)
    return data
}

// 获取渲染
module.exports.getbackUserrsDao=async function({currentPage,pageSize}){
//获取数据总数
const totalCount=await mongoose.model("backUsersModel").countDocuments();
//获取总页数
const totalPages = Math.ceil(totalCount / pageSize);
//获取用户
const data = await mongoose.model("backUsersModel")
.find()
.limit(pageSize - 0)
.skip((currentPage - 1) * pageSize);
    return {data,totalCount,totalPages,currentPage,pageSize}
}

//删除
module.exports.removebackUsersDao=async function(users){
    const data = await mongoose.model("backUsersModel").deleteOne(users);
    return data
}

// 修改
// 获取
module.exports.getByIdDao=async function(users){
    const data = await mongoose.model("backUsersModel").find(users);
    return data
}
// 确认修改
module.exports.changeUerDao=async function({
    _id,
    name,
    backphone
}){
    const data = await mongoose.model("backUsersModel").update({_id},{ name,
        backphone});
    return data
}