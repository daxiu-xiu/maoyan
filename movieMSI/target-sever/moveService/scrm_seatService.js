
const {fang_idshuju,shanzuo,qunabu ,seatIdGetSeat} = require("../dao/scrm_seatDao");


//获取
module.exports.fang_idshuju = async function (ting_id) {
    const data = await fang_idshuju(ting_id);
    return data;
}

//删除座位
module.exports.shanzuo = async function (ting_id) {   
    const data = await shanzuo(ting_id)
    // console.log("+++++++++++++",data);
    
    if (data.ok == 1) {
        return true;
    }
    return false;
}

//通过id找到此座位的明细
module.exports.seatIdGetSeat = async function (_id) {
    const data = await seatIdGetSeat(_id);
    return data;
}


