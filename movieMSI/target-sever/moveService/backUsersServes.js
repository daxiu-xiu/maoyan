const {
    backUserrsDao,
    getbackUserrsDao,
    loginkUserrsDao,
    removebackUsersDao,
    getByIdDao,
    changeUerDao
} = require("../dao/backUsers_Dao");

//注册
module.exports.backUsers_sever = async function (users) {
    const data_dao = await backUserrsDao(users);
    if (data_dao._id) {
        return true
    } else {
        return false
    }
}
// 登录
module.exports.loginUsers_sever = async function (users) {
    const data_dao = await loginkUserrsDao(users);
    if (data_dao.length>0) {
        return true
    } else {
        return false
    }
}
// 获取渲染、
module.exports.getbackUsers_sever = async function (users) {
    const data_dao = await getbackUserrsDao(users);
    return data_dao;
}
//删除
module.exports.removebackUsers_sever = async function (users) {

    const data_dao = await removebackUsersDao(users);
    if (data_dao.ok) {
        return true
    } else {
        return false
    }
}
// 修改
// 渲染
module.exports.getById_sever = async function (users) {
    const data_dao = await getByIdDao(users);
    if (data_dao.length>0) {
        return data_dao
    } 
}

// 确认修改
module.exports.changeUer_sever = async function (users) {
    const data_dao = await changeUerDao(users);
    if (data_dao.ok) {
        return true
    } 
}