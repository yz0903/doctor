const mysql = require('mysql')
// 连接
const options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'doctor'
}
const db = mysql.createConnection(options);

db.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('连接成功')
    }
})

// var sql = 'SELECT * FROM sys_user';
// db.query(sql, function (err, res) { 
//   if (err) { //失败就报个错。
//     console.log('[SELECT ERROR] - ', err.message);
//     return;
//   }
//   console.log("数据库查的结果：");
// //   console.log(res); 
//  res.forEach(item => {
//      console.log(item.id)
//   });
// //   console.log(s)
// });

function sqlQuery(strSql, arr) {
    return new Promise((resolve, reject) => {
        db.query(strSql, arr, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}
module.exports = sqlQuery;
