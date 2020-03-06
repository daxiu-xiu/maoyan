const mongoose = require("mongoose");
module.exports.order = async function (users) {
    const data = await mongoose.model("orderRoomModel").create(users);
    return data
}

module.exports.orderFind = async function ({
    usersName
}) {
    const data = await mongoose.model("orderRoomModel").find({
        usersName
    });
    return data

}


module.exports.updateOrder = async function (_id) {
    const data = await mongoose.model("orderRoomModel").deleteOne(_id);
    return data
}




module.exports.orderRemove = async function (_id) {
    const data = await mongoose.model("orderRoomModel").deleteOne(_id);
    return data
}