const mongoose = require("mongoose");



//新增座位
module.exports.addseat = async (ProjectionId) => {
    // console.log("111", ProjectionId);
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let seatshuju = {
                scrm_row: i,
                scrm_col: j,
                ProjectionId
            }
            data = await mongoose.model("seatModel").create(seatshuju);
        
        }
    }
}


//获取
module.exports.fang_idshuju = async function (ting_id) {
    // console.log(ting_id);
    const data = await mongoose.model("seatModel").find(ting_id);
    // console.log(data);
    return data;
}



//删除
module.exports.shanzuo = async function (ting_id) {
    // console.log("2312312",ting_id);
    const data = await mongoose.model("seatModel").deleteMany(ting_id);
    // console.log(data);
    // console.log(data);
    return data;
}

//通过id找到此座位的明细
module.exports.seatIdGetSeat = async function (_id) {
    // console.log(_id)
    const data = await mongoose.model("seatModel").find(_id)
    return data;
}