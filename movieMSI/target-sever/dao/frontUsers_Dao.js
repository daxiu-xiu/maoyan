const mongoose = require("mongoose");
// 注册
module.exports.register_Dao=async function(userData)
{
    
    return mongoose.model("frontUsersModel").create(userData);
}
// 登录
module.exports.login_Dao=async function({front_name,front_password})
{
    return mongoose.model("frontUsersModel").find({front_name, front_password});
}
module.exports.isEixt_Dao=async function({front_name})
{
    return mongoose.model("frontUsersModel").find({front_name});
}
// 获取
module.exports.getUsersDao = async ({
    searchTerm,
    currentPage,
    pageSize
}) => {
    let totalCount;
    let totalPages;
    let users;
    if (searchTerm) {
        // 拆分成数组，[0]保存为查询条件[1]为查询信息
        const searcherm = searchTerm.split("&");
        users = await mongoose.model("frontUsersModel").find({
                // 模糊查询
                [searcherm[0]]: {
                    $regex: `${searcherm[1]}`
                }
            }).limit(pageSize - 0) // 查询条数
            .skip((currentPage - 1) * pageSize); // 跳过条数   ;
        totalCount = users.length;
        totalPages = Math.ceil(totalCount / pageSize);
    } else {
        // 获取总条数
        totalCount = await mongoose.model("frontUsersModel").countDocuments();
        // 总页数
        totalPages = Math.ceil(totalCount / pageSize);
        // 获取影院数据
        users = await mongoose.model("frontUsersModel")
            .find()
            .limit(pageSize - 0) // 查询条数
            .skip((currentPage - 1) * pageSize); // 跳过条数   
    }
    return {
        currentPage,
        pageSize,
        totalCount,
        totalPages,
        users
    }
}
module.exports.getALL_usersDao = async () => {
    const data = await mongoose.model("frontUsersModel").find();
    return data;
}
module.exports.delete_usersDao = async (_id) => {
    const data = await mongoose.model("frontUsersModel").deleteOne(_id);
    return data;
}
// 修改
module.exports.update_usersDao = async (updata_data) => {
    const data = await mongoose.model("frontUsersModel").update({
        _id: updata_data._id
    }, {
        front_name: updata_data.front_name,
        front_gender: updata_data.front_gender,
        front_age: updata_data.front_age,
        front_phone: updata_data.front_phone,
    });
    return data;
}