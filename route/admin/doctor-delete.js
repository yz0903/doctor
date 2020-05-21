const doctorModel = require('../../model/doctorModel')
module.exports = async(req,res)=>{
    let id =req.query.id;
    doctorModel.doctorDelete(id)
    res.redirect('/admin/doctor')
}