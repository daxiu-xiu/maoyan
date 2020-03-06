// 关于 token 的验证配置
const expressJWT = require("express-jwt");

const jwtAuth = expressJWT({
    secret: 'hi',
    credentialsRequired: true  // false：不校验
}).unless({  // unless 中放的就是不检验 token 的 api。
    path: ["/users/login", "/users/registrs","/favicon.ico"]
}); 

module.exports = jwtAuth;