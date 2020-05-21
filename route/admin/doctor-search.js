const doctorModel = require('../../model/doctorModel')
module.exports = async (req, res) => {
    const { username, title, category } = req.body;
    let page = req.query.page || 1;
    let pageSize = 20
    let result =await doctorModel.doctorSearch(username, title, category,pageSize,page)
    console.log(result)
    console.log()
    if (result&&result.length != 0) {
        console.log('有结果')
        let total = Math.ceil(result.length / pageSize)
        res.render('admin/doctor', {total, result })
    } else {
        res.render('admin/doctor', { msg:'没有查询结果' })
    }
}