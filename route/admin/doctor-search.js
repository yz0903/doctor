const doctorModel = require('../../model/doctorModel')
module.exports = async (req, res) => {
    const { username, title, category } = req.query;
    let page = Number(req.query.page) || 1;
    let pageSize = 20
    	// 数据总条数
	let count = await doctorModel.doctorSearchCount(username, title, category)
    let result =await doctorModel.doctorSearch(username, title, category,pageSize,page)
    let url = '/admin/doctor-search'
    let queryparam = '&username='+username+'&title='+title+'&category='+category
    let prepage = page - 1 || 1
	let nextpage = page + 1
    console.log(result)
    console.log()
    if (result&&result.length != 0) { 
        let total = Math.ceil(count/pageSize)
        console.log('有结果'+result.length+" "+total)
        res.render('admin/doctor', {url,queryparam,username,category,title,total,page,prepage,nextpage,result})
    } else {
        res.render('admin/doctor', { msg:'没有查询结果' })
    }
}