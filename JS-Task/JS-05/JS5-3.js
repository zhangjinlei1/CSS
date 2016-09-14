/**
 * Created by Raninbow on 2016/9/12.
 */
var typeArr = ["CSS", "JS", "JAVA", "运维", "DBA", "产品", "IOS", "Android"];
var talentArr = ["学霸", "学渣"];
var levelArr = ["0基础", "修行3个月以内", "修行6个月以内", "修行1年以内", "修行3年以内", "修行3年以上"];
data = sessionStorage.data;
console.log(data);
$.ajax({
    url: "a/student/" + data,
    type: "GET",
    dataType: "JSON",
    success: function (qingQ) {
        if (qingQ.code == 200) {                //生成详细页
            console.log(qingQ.joinTime);
            var mouth = new Date(qingQ.joinTime);
            var Year = mouth.getFullYear();
            var Month = mouth.getMonth() + 1;
            var Sdote = mouth.getDate();
            console.log(qingQ);
            $(".name").append("<span class='G-on'>" + qingQ.name + "</span>");
            $(".qq").append("<span class='G-on'>" + qingQ.qq + "</span>");
            console.log(typeArr[qingQ.type]);
            $(".type").append("<span class='G-on'>" + typeArr[qingQ.type - 1] + "</span>");
            $(".school").append("<span class='G-on'>" + qingQ.school + "</span>");
            $(".talent").append("<span class='G-on'>" + talentArr[qingQ.talent - 1] + "</span>");
            $(".level").append("<span class='G-on'>" + levelArr[qingQ.level - 1] + "</span>");
            $(".joinTime").append("<span class='G-on'>" + Year + '年' + Month + '月' + Sdote + '日' + "</span>");
            $(".wish-on").text(qingQ.wish);
        }

        $(".Editor").click(function () {            //生成修改页面
                var mouth = new Date(qingQ.joinTime);
                var Year = mouth.getFullYear();
                var Month = mouth.getMonth() + 1;
                var Sdote = mouth.getDate();
                $(".G-on:eq(0)").html("<input type='text' name='a1' value=" + qingQ.name + " class='text-css'>");
                $(".G-on:eq(1)").html("<input type='text' name='a2' value=" + qingQ.qq + " class='text-css'>");
                $(".G-on:eq(2)").html("<label  class='radio-css'><input type='radio' name='a3' value='1'>CSS</label>" +
                    "<label  class='radio-css'><input type='radio' name='a3' value='2'>JS</label>" +
                    "<label  class='radio-css'><input type='radio' name='a3' value='3'/>JAVA</label>" +
                    "<label  class='radio-css'><input type='radio' name='a3' value='4'/>运维</label>" +
                    "<label  class='radio-css'><input type='radio' name='a3' value='5'/>DAB</label>" +
                    "<label  class='radio-css'><input type='radio' name='a3' value='6'/>产品</label>" +
                    "<label  class='radio-css'><input type='radio' name='a3' value='7'/>IOS</label>" +
                    "<label  class='radio-css'><input type='radio' name='a3' value='8'/>Android</label>");
                $(".G-on:eq(3)").html("<input type='text' name='a4' value=" + qingQ.school + " class='text-css'>");
                $(".G-on:eq(4)").html("<label  class='radio-css'><input type='radio' name='a5' value='1'>学霸</label>" +
                    "<label  class='radio-css'><input type='radio' name='a5' value='2'>学渣</label>");
                $(".G-on:eq(5)").html("<label  class='radio-css'><input type='radio' name='a6' value='1'>0基础</label>" +
                    "<label  class='radio-css'><input type='radio' name='a6' value='2'>修行3个月以内</label>" +
                    "<label  class='radio-css'><input type='radio' name='a6' value='3'>修行6个月以内</label>" +
                    "<label  class='radio-css'><input type='radio' name='a6' value='4'>修行1年以内</label>" +
                    "<label  class='radio-css'><input type='radio' name='a6' value='5'>修行3年以内</label>" +
                    "<label  class='radio-css'><input type='radio' name='a6' value='6'>修行3年以上</label>");
                $(".G-on:eq(6)").html("<input type='text' name='a7' value=" + Year + '年' + Month + '月' + Sdote + '日' + " class='text-css'>");
                $(".wish-on").html("<label><textarea class='text-css-2' name='a8'>" + qingQ.wish + "</textarea></label>");
                $("input[name=a3][value=" + qingQ.type + "]").attr('checked', true);          //  值为默认选中
                $("input[name=a5][value=" + qingQ.talent + "]").attr('checked', true);
                $("input[name=a6][value=" + qingQ.level + "]").attr('checked', true);
            });
    }
});
$(".Delete").click(function(){
    $.ajax({
        url: "a/students/?id="+data,
        type:"POST",
        success:function () {
            alert("删除成功");
            location.href = "JS5-1.html";

        }
    })
});
$(".goHome").click(function(){            //返回
    location.href = "JS5-1.html";
});
$(".goTrue").click(function(){                          //确认修改
    var Oname = $("input[name='a1']").val();             //获取输入框的值
    var Oqq = $("input[name='a2']").val();
    var Otype = $('input[name="a3"]:checked').val();
    var Oschool = $("input[name='a4']").val();
    var Otalent = $("input[name='a5']:checked").val();
    var Olevel = $("input[name='a6']:checked").val();
    var OjoinTime = $("input[name='a7']").val();
    var Owish = $(".text-css-2").val();

    console.log(Oname);
    console.log(Oqq);
    console.log(Otype);
    console.log(Oschool);
    console.log(Otalent);
    console.log(Olevel);
    console.log(OjoinTime);
    console.log(Owish);
    $.ajax({
        url: "a/student/" + data,
        type: "PUT",
        dataType: "JSON",
        data: {
            name: Oname,
            qq: Oqq,
            type: Otype,
            school: Oschool,
            talent: Otalent,
            level:Olevel,
            joinTime: "1328112000000",    //时间不会选取，想办法。
            wish: Owish
        },
        success: function () {
            alert("修改成功");
            location.href = "JS5-1.html";
        }
    });
});

