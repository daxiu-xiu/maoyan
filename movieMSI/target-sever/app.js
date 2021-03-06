var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./dao/database/database")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//引入放引厅
var scrm_ProjectionRouter = require('./routes/scrm_Projection');
//引入选座
var scrm_seatRouter = require('./routes/scrm_seat');
//用户
var msi_backUsers = require('./routes/backUsers')
var msi_frontUsers = require('./routes/frontUsers')
//引入排片
var chipRouter = require('./routes/chip');
//引入电影
var filmRouter = require('./routes/film');

// 连接到电影院第一层cinemas
var cinemasRouter = require('./routes/cinemas');

//引入排片选座
var selectRouter = require('./routes/select');
// 引入订单中心
var orderRoomRouter=require('./routes/orderRoom')

var paipianzuoweiRouter = require("./routes/paipianzuowei")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/paipianzuowei', paipianzuoweiRouter);

//配置放映厅一级路径
app.use('/Projections', scrm_ProjectionRouter);
//配置选座一级路径
app.use('/seats', scrm_seatRouter);

//配置排片一级路径
app.use('/chip', chipRouter);

//配置排片选座一级路径
app.use('/select', selectRouter);


// 订单中心
app.use('/orderRoom', orderRoomRouter)

//配置电影一级路径
app.use('/film', filmRouter);

//用户路径
app.use('/backUsers', msi_backUsers);
app.use('/frontUsers', msi_frontUsers)
//影院
app.use('/cinemas', cinemasRouter);
// 订单中心
app.use('/orderRoom',orderRoomRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8080, () => console.log("目标服务器 8080 端口启动成功！"));