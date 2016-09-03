/**
 * Created by Raninbow on 2016/8/29.
 */
//获取玩家数据
TotalArrStr = sessionStorage.sth;
Totalarr = JSON.parse(TotalArrStr);
console.log(Totalarr);
var JS;
var XH;
//将玩家数据输出到HTML里。
//var ul=document.getElementsByClassName("game")[0];
//for(var i=0;i<Totalarr.length;i++){
//    var divNum=document.createElement("div");
//    var liList=document.createElement("li");
//    var PNum=document.createElement("p");
//    var SpanNum=document.createElement("span");
//    SpanNum.innerHTML=Totalarr[i];
//    PNum.innerHTML=i+1+"号";
//    divNum.appendChild(SpanNum);
//    divNum.appendChild(PNum);
//    liList.appendChild(divNum);
//    ul.appendChild(liList);
//}
for(var i=0;i<Totalarr.length;i++) {
    var Box="<li class='LiSi'><div class='DivBox'><span class='JueSe'>"+Totalarr[i]+"</span><p class='XuHao'>"+(i+1)+"号"+"</p></div></li>";
    $(".game").append(Box);
}
Weather=sessionStorage.Weather;
JS=sessionStorage.JS;
XH=sessionStorage.XH;
if (Weather==null){
    $('.header-auto').text('杀手杀人');
    $('.Killer-eyes-on').text('杀手请睁眼，选择一个你要杀的人');
    $('.Killer-eyes-font').text('点击一个玩家头像将他杀死');
    $('.page-footer-button').text('杀死');
    Weather='Night';
}
 else if( Weather=='Night'){
    $('.header-auto').text('杀手杀人');
    $('.Killer-eyes-on').text('杀手请睁眼，选择一个你要杀的人');
    $('.Killer-eyes-font').text('点击一个玩家头像将他杀死');
    $('.page-footer-button').text('杀死');
}
else {
    $('.header-auto').text('玩家投票');
    $('.Killer-eyes-on').text('发言讨论结束，请大家投票');
    $('.Killer-eyes-font').text('点击票数人最多的头像');
    $('.page-footer-button').text('投死');
}

for(var a=0;a<Totalarr.length;a++){
    if($('.JueSe').eq(a).text()=="死亡"){
        $('.DivBox').eq(a).addClass('BjYs2');
    }
}

    $('.DivBox').click(function(){
        console.log(JS);
        if($(this).children('span.JueSe').text()=='死亡'){
            alert('该玩家已经死亡')
        }else if (Weather=='Night'){
            if ($
                (this).children('span.JueSe').text()=='杀手'){    //判断选择点击的子元素文本是不是等于杀手
                alert('杀手不能在黑夜选择杀手');         //在黑夜不能选择杀手
            }
            else if($(this).is(".BjYs")){               //不是平民的点击判断是否有标记
                $(this).removeClass("BjYs");             // 有标记的再次点击去除标记
            }
            else if($('.LiSi').children('div.DivBox').is('.BjYs')){   //标记其他角色，清除原有标记
                $('.DivBox').removeClass('BjYs');           //删除原有标记
                $(this).addClass('BjYs');                   //标记点击的新的
            }
            else {
                $(this).addClass('BjYs');                   //标记点击的新的
            }
            JS=$(this).find(".JueSe").text();
            XH=$(this).find(".XuHao").text();
        }
        else {
            if($(this).is(".BjYs")){
                $(this).removeClass("BjYs");
            }
            else if($('.LiSi').children('div.DivBox').is('.BjYs')){

                $('.DivBox').removeClass('BjYs');
                $(this).addClass('BjYs');
            }
            else {
                $(this).addClass('BjYs');
            }
            JS=$(this).find(".JueSe").text();
            XH=$(this).find(".XuHao").text();

        }
    });
$('.page-footer-button').click(function(){
   if($('.DivBox').hasClass('BjYs')){
       if(Weather=='Night'){
           Weather='Day'
       }
       else{
           Weather='Night'
       }
       location.href ="JS4-03.html";
        sessionStorage.Weather=Weather;
       console.log(Weather);
        sessionStorage.JS=JS;
       console.log(JS);
        sessionStorage.XH=XH;
       console.log(parseInt(XH));
       Totalarr[parseInt(XH)-1] = "死亡";
       console.log(Totalarr);
       var TotalArrStr= JSON.stringify(Totalarr);
       sessionStorage.sth = TotalArrStr;//存入
   }
    else {
       alert('请选中要杀死的人');
   }
});



