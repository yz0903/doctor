const sqlQuery = require('../../model/connect') 
module.exports =async (req,res)=>{
    let id = req.query.id
    let str ='SELECT DoctorName,Photo,Title,PhoneNumber,Email,Introduction,HospitalName,CategoryName from doctor d,hospital h,dis_category ds WHERE  d.HospitalID=h.HospitalID and d.Dis_CategoryID=ds.Dis_CategoryID and DoctorID=? '
    let result = await sqlQuery(str,[id])
    res.render('admin/doctor-description',{result})
}