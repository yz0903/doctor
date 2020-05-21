const mysql = require('mysql');
const sqlQuery = require('./connect.js');

module.exports = {
    // pagesize 每页条数
    // page 当前页面
    doctorList: async function (pageSize, page) {
        // 开始查询的位置
        let start = (page - 1) * pageSize;
        // 查询用户数据
        let str = 'select d.DoctorID,d.DoctorName,d.Title,d.PhoneNumber,h.HospitalName,ds.CategoryName from doctor d INNER JOIN hospital h on d.HospitalID=h.HospitalID INNER JOIN dis_category ds on d.Dis_CategoryID = ds.Dis_CategoryID limit ?,?'
        let result = await sqlQuery(str, [start, pageSize]);
        return result
    },
    // 计算数据总数
    doctorCount: async function () {
        let str = "select count(1) from doctor "
        let result = await sqlQuery(str)
        let count = JSON.parse(JSON.stringify(result))[0]['count(1)']
        return count
    },
    doctorDelete: async function (id) {
        let str = 'delete from doctor where DoctorID = ?'
        await sqlQuery(str, [id])
        return true
    },
    doctorSearch: async function (username, title, category, pageSize, page) {
        let str = 'SELECT  DoctorID,DoctorName,Photo,Title,PhoneNumber,Email,Introduction,HospitalName,CategoryName from doctor d,hospital h,dis_category ds WHERE  d.HospitalID=h.HospitalID and d.Dis_CategoryID=ds.Dis_CategoryID'
        let arr = []
        if (username) {
            username = "%" + username + "%"
            str += " and DoctorName like ?"
            arr.push(username)
        }
        if (title) {
            title = "%" + title + "%"
            str += " and Title like ?"
            arr.push(title)
        }
        if (category) {
            category = "%" + category + "%"
            str += " and CategoryName like ?"
            arr.push(category)
        }
        str += "limit ?,?"
        arr.push((page - 1) * pageSize, pageSize)
        let result = await sqlQuery(str, arr)
        return result
    }
}