// 引用expess框架
const express = require('express');
// 创建博客展示页面路由
const admin = express.Router();

// 渲染医生信息显示页面
admin.get('/doctor',require('./admin/doctorPage'))
// 获得医生信息列表分页
admin.get('/doctorPageList',require('./admin/doctorPageList'))
// 将路由对象做为模块成员进行导出
module.exports = admin;