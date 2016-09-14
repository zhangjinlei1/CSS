/**
 * Created by Raninbow on 2016/9/6.
 */
var typeArr = ["CSS", "JS", "JAVA", "运维", "DBA", "产品", "IOS", "Android"];
$.ajax({
    url: "a/students/",
    type: "get",
    dataType: "JSON",
    success: function (qingQ) {
        if (qingQ.code == 200) {
            var students = qingQ.data;
            for (var i = 0; i < students.length; i++) {                        //添加数据
                var mouth = new Date(students[i].joinTime);
                var Year = mouth.getFullYear();
                var Month = mouth.getMonth();
                var Sdote = mouth.getDate();
                var box = "<li class='SJ-on'>" +
                    "<span class='ID-ON'>" + students[i].id + "</span>" +
                    "<span>" + students[i].name + "</span>" +
                    "<span>" + typeArr[students[i].type-1] + "</span><span>" + Year + '年' + [Month+1] + '月' + Sdote + '日' + "</span>" ;
                $(".SJ").append(box);
            }
            $('.SJ-on').click(function () {
                var liSum=$(this).index();
                var data= students[liSum].id;
                console.log(data);
                sessionStorage.data=data;
                console.log(data);
                location.href = 'JS5-3.html';
            });
        }

    }
});

$(".Go").click(function () {
    location.href = 'JS5-2.html';
});