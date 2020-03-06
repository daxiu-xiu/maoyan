var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/flims';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', function () {
    console.log('连接到数据库' + dbURI);
});


//引入放映厅
require("../modles/scrm_ProjectionModel");
//引入放映厅座位
require("../modles/scrm_seatModel")

require("../modles/cinemaModles")

require("../modles/backUsers_Model")

require("../modles/frontUsers_Model")

//引入电影
require("../modles/filmModle")
//引入排片
require("../modles/chipModle")


//引入排片的座位
require("../modles/selectModle")
require("../modles/paipianzuowei")


// 引入个人订单数据库
require("../modles/orderRoom")

