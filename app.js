// 引用expess框架
const express = require('express');
// 处理路径
const path = require('path');
// 引入body-parser模块 用来处理post请求参数
const bodyPaser = require('body-parser');
// 导入express-session模块
const session = require('express-session');
// 创建网站服务器
const app = express();
// 数据库连接
require('./model/connect');
// 处理post请求参数
app.use(bodyPaser.urlencoded({ extended: false }));
// 配置session
app.use(session({
    secret: 'secret key',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// 告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('express-art-template'));

// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public/assets')))

// 引入路由模块
const home = require('./route/home');
const admin = require('./route/admin');
const login = require('./route/LR')

//  拦截请求 判断用户登录状态
app.use('/', (req, res, next) => {
    if (req.url != '/login' && req.url != '/register' && req.url != '/home' && !req.session.email) {
        res.redirect('/login')
    } else {
        next()
    }
})

// 为路由匹配请求路径
app.use('/', login)
app.use('/home', home);
app.use('/admin', admin);


// 监听端口
app.listen(3000);
console.log('网站服务器启动成功, 请访问localhost')