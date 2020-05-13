const sqlQuery = require('../../model/connect')
module.exports = async (req, res) => {
    let str = 'select count(*) from doctor'
    let result = await sqlQuery(str)
    // 数据总条数
    let count = JSON.parse(JSON.stringify(result))[0]['count(*)']
    // 当前页
    let page = req.query.page
    // 分页大小
    let pageSize = 20
    // 总共页数
    let total = Math.ceil(count / pageSize)
    let start = (page - 1) * pageSize
    let str1 = 'select * from doctor limit ?,?'
    let result1 = await sqlQuery(str1, [start, pageSize])
    // console.log(result1)
    res.send(result1)
}
