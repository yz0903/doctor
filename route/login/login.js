const bcrypt = require('bcrypt');
const sqlQuery = require('../../model/connect')
module.exports = async (req, res) => {
	// 接收请求参数
	var { email, password } = req.body;
	if (email.trim().length == 0 || password.trim().length == 0) return res.status(400).render('error', { msg: '邮件地址或者密码错误' });
	// // 根据邮箱地址查询用户信息
	let sqlStr = "select * from sys_user where email=?"
	var result = await sqlQuery(sqlStr, [email])
	let sqlStr2 = "select * from sys_user where email=?"
	var result2 = await sqlQuery(sqlStr2, [email])
	result2.forEach(item => {
		return result.push(item)
	})
	if (result.length != 0) {
		result.forEach(async item => {
			let isValid = await bcrypt.compare(password, item.Password);
			// 如果密码比对成功
			if (isValid && item.roleid == 1000) {
				// 登录成功
				req.session.email = item.Email;
				// req.app.locals.email = item.email;
				res.redirect('/admin/doctor');
			} else if (isValid && item.roleid == 1001) {
				req.session.email = item.Email;
				res.send('个人首页')
			} else if (isValid && item.roleid == 1002) {
				req.session.email = item.Email;
				res.send('医生首页')
			}
			else {
				// 没有查询到用户
				res.status(400).render('error', { msg: '邮箱地址或者密码错误' })
			}
		});
	} else {
		// 没有查询到用户
		res.status(400).render('error', { msg: '邮箱地址或者密码错误' })
	}
}