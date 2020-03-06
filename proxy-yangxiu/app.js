var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var frontUsersRouter = require('./routes/frontUsers');

// /引入验证token
var jwtAuth = require('./utils/jwt');

// 配置代理服务器的请求转发
const proxy = require("http-proxy-middleware");
const options = {
  target: 'http://localhost:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/'
  }
}

var app = express();

app.use('/api', proxy(options));
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
app.use('/frontUsers', frontUsersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// 这里判断前端ajax发出来的数据是否有携带token，如果没有，则在这里返回错误，如果有则把数据传到代理服务器
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      message: 'invalid token',
      error: err
    });
  } else {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  }
});

app.listen(3030, () => console.log("代理服务器 3030 端口启动成功！"));