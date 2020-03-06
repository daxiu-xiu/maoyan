const {
    getzuowei,updateSate
} = require("../dao/paipianzuoweiDao")

//通过排片id座位寻找该场次的所有位置
module.exports.getzuowei = async function (chipId) {
    const data = await getzuowei(chipId);
    return data;
}
//通过排片的id和座位的id修改状态值
module.exports.updateSate = async function (id) {
    const data = await updateSate(id);
    return data;
}