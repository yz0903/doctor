// $('#doctorTable').on('load',function(){
   
// })
$(document).ready(function(){
    $.ajax({
        type:'get',
        url:'/admin/doctorPageList',
        dataType:'json',
        data:{
            page:1
        },
        success:function(data){
            console.log(data)
            var html = template('doctorListTPL',{data})
            console.log(html)
            $('#doctorBox').html(html)
        }
    })
})