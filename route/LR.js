const express = require('express');
const admin = express.Router();

// 渲染登录页面
admin.get('/login',require('./login/loginPage'))

// 登录功能
admin.post('/login',require('./login/login'))

// 渲染注册页面
admin.get('/register',require('./login/registerPage'))

// 注册功能
admin.post('/register',require('./login/register'))

// 退出功能
admin.get('/loginOut',require('./login/loginOut'))
// 将路由对象做为模块成员进行导出
module.exports = admin;