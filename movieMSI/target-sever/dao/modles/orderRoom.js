const mongoose = require("mongoose");


const orderRoom = new mongoose.Schema({
     // 订单创建日期
     orderTime:String,
     //电影院名字
     cinemaName:String,
     //放映厅名字
     projectionName:String,
     // 电影开场时间
     movieTime:String,
     //电影ID
     movieId:String,
     // 票的数量
     ticketNum:String,
     // 票的总价
     totalMoney:String,
     //电影图片
     movieImage:String,
     // 电影的名字
     movieName:String,
     // 座位号
     sateNumber:String,
     // 个人账户
     usersName:String,
})


mongoose.model("orderRoomModel", orderRoom, "orderRoom");