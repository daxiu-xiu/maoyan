const {
    order,
    orderFind,
    updateOrder,



    orderRemove
} = require("../dao/orderRoomDao")


module.exports.order = async function (users) {
    const data_dao = await order(users);
    if (data_dao._id) {
        return true
    } else {
        return false
    }
}

module.exports.orderFind = async function (users) {
    const data_dao = await orderFind(users);
    if (data_dao) {
        return data_dao
    }
}
//通过订单的id删除订单
module.exports.updateOrder = async function (_id) {
    const data = await updateOrder(_id);
    return data;
}

module.exports.orderRemove = async function (users) {
    const data_dao = await orderRemove(users);
    if (data_dao) {
        return data_dao
    }
}