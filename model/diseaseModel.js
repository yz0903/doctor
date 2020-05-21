const sqlQuery = require('./connect')
module.exports = {
    doctorList: async function (pageSize, page) {
        // 开始查询的位置
        let start = (page - 1) * pageSize;
        // 查询用户数据
        let str = 'select d.DoctorID,d.DoctorName,d.Title,d.PhoneNumber,h.HospitalName,ds.CategoryName from doctor d INNER JOIN hospital h on d.HospitalID=h.HospitalID INNER JOIN dis_category ds on d.Dis_CategoryID = ds.Dis_CategoryID limit ?,?'
        let result = await sqlQuery(str, [start, pageSize]);
        return result
    }
}