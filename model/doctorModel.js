const mysql = require('mysql');
const sqlQuery = require('./connect.js');

module.exports = {
    // pagesize 每页条数
    // page 当前页面
    doctorList: async function (pagesize, page, callback) {
        // 开始查询的位置
        let start = (page - 1) * pagesize;
        // 查询用户数据
        let str = "select * from doctor  limit ?,?"
        let result = await sqlQuery(str, [start, 20]);
        return result
    },
    // 计算数据总数
    doctorCount: async function () {
        let str = "select count(*) from doctor"
        let result = await sqlQuery(str)
        console.log(result)
        return result
    }
    // stuList: function (num, current, callback) {
    //     let arr = [(current - 1) * num, parseInt(num)];
    //     sqlPool.connect("select * from user limit ?,?", arr, callback);
    // },
    // stuCount: function (name, sex, age, callback) {
    //     let sql = "select count(1) as num from user where 1=1";
    //     let arr = [];
    //     if (name != "") {
    //         name = "%" + name + "%";
    //         sql += " and username like ?";
    //         arr.push(name);
    //     }
    //     if (age != "") {
    //         age = "%" + age + "%";
    //         sql += " and age like ?";
    //         arr.push(age);
    //     }
    //     if (sex != -1) {
    //         if (sex == 1) {
    //             sex = "%男%";
    //             sql += " and sex like ?";
    //             arr.push(sex);
    //         } else {
    //             sex = "%女%";
    //             sql += " and sex like ?";
    //             arr.push(sex);
    //         }
    //     }
    //     sqlPool.connect(sql, arr, callback);
    // },
    // stuDelete: function (myid, callback) {
    //     sqlPool.connect("delete from user where id=?", [myid], callback);
    // },
    // stuAdd: function (username, pwd, callback) {
    //     var sql = "INSERT INTO user(id,username,password) VALUES(NULL,?,?)";
    //     console.log(username + "---" + pwd);
    //     sqlPool.connect(sql, [username, pwd], callback);
    // },
    // stuUpdate: function (id, newusername, newpwd, callback) {
    //     if (newusername == "") {
    //         sqlPool.connect("UPDATE USER SET PASSWORD=? WHERE id=?", [newpwd, id], callback);
    //     } else if (newpwd == "") {
    //         sqlPool.connect("UPDATE USER SET username=? WHERE id=?", [newusername, id], callback);
    //     } else {
    //         sqlPool.connect("UPDATE USER SET username=?,PASSWORD=? WHERE id=?", [newusername, newpwd, id], callback);
    //     }
    // },
    // stuRearch: function (name, sex, age, num, current, callback) {
    //     let sql = "select * from user where 1=1";
    //     let arr = [];
    //     if (name != "") {
    //         name = "%" + name + "%";
    //         sql += " and username like ?";
    //         arr.push(name);
    //     }
    //     if (age != "") {
    //         age = "%" + age + "%";
    //         sql += " and age like ?";
    //         arr.push(age);
    //     }
    //     if (sex != -1) {
    //         if (sex == 1) {
    //             sex = "%男%";
    //             sql += " and sex like ?";
    //             arr.push(sex);
    //         } else {
    //             sex = "%女%";
    //             sql += " and sex like ?";
    //             arr.push(sex);
    //         }
    //     }
    //     sql += " limit ?,?";
    //     arr.push((current - 1) * num, parseInt(num));
    //     sqlPool.connect(sql, arr, callback);
    // }
}