const sqlQuery = require('../../model/connect')
const bcrypt = require('bcrypt');
module.exports = async (req, res) => {
    var { email, option } = req.body;
    var password = req.body.password[0];
    var option = parseInt(option)
    async function run(str) {
        let salt = await bcrypt.genSalt(10);
        let result = await bcrypt.hash(str, salt)
        return result
    }
    let sqlStr = "select * from sys_user where email = ?";
    let result = await sqlQuery(sqlStr, [email])
    if (result.length != 0) {
        // 注册失败
        res.render('error', { msg: '用户已存在，请重新填写邮箱' })
    } else {
        sqlStr = 'insert into sys_user(email,password,roleid)values(?,?,?)'
        await sqlQuery(sqlStr, [email, await run(password), option])
        res.render('error', { msg: '注册成功' })
    }
}