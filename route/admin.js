// 引用expess框架
const express = require('express');
// 创建博客展示页面路由
const admin = express.Router();

// 渲染医生信息显示页面
admin.get('/doctor',require('./admin/doctorPage'))

// 医生信息详情描述页面
admin.get('/doctor-description',require('./admin/doctor-description'))

// 删除医生信息
admin.get('/doctor-delete',require('./admin/doctor-delete'))

// 医生信息检索功能
admin.post('/doctor-search',require('./admin/doctor-search'))

// 疾病信息页面展示
admin.get('/disease',require('./admin/disease/diseasePage'))
//将路由对象做为模块成员进行导出
module.exports = admin;