// $('#doctorTable').on('load',function(){
   
// })
// $(document).ready(function(){
//     $.ajax({
//         type:'get',
//         url:'/admin/doctorPageList',
//         dataType:'json',
//         data:{
//             page:1
//         },
//         success:function(data){
//             console.log(data)
//             var user = {
//                 obj: {
//                     name: 'Bruce Lee',
//                     age: 32,
//                     gender: 'male'
//                 },
//                 arr: [
//                     {type: 1, price: 10},
//                     {type: 2, price: 12},
//                     {type: 3, price: 18}
//                 ] 
//             }
//             console.log(user.arr[0])
//             var html = template('doctorListTPL',{user:user})
//             console.log(html)
//             $('#doctorBox').html(html)
//         }
//     })
// })