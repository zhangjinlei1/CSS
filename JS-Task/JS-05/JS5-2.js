/**
 * Created by Raninbow on 2016/9/6.
 */

$(".btn-1").click(function(){
    var Oname= $("input:eq(0)").val();
    var Oqq= $("input:eq(1)").val();
    var Otype=$("input[name='a1']:checked").val();
    var Otalent=$("input[name='b1']:checked").val();
    var Olevel=$("input[name='c1']:checked").val();
    var Oschool= $("input:eq(18)").val();
    console.log(Oschool);
    var Owish=$("textarea").val();
    if ( Oname!="" && Oqq!="" && Oschool!=""){
        $.ajax({
            url:"a/student/",
            type:"POST",
            dataType:"JSON",
            data:{
                name:Oname,
                qq:Oqq,
                type:Otype,
                talent:Otalent,
                school:Oschool,
                level:Olevel,
                joinTime:"1328112000000",
                wish:Owish
            },
            success:function(data){
                if(data.code==200){
                    alert("报名成功");
                    location.href = "JS5-1.html";
                }
            }
        });
    }
    else {
        alert("请填写完整的资料");
    }
});
$(".btn-2").click(function(){
    location.href = "JS5-1.html";
});

