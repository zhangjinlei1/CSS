/**
 * Created by Raninbow on 2016/9/2.
 */
TotalArrStr = sessionStorage.sth;
Totalarr = JSON.parse(TotalArrStr);
console.log(Totalarr);
XH=sessionStorage.XH;
JS=sessionStorage.JS;
Weather=sessionStorage.Weather;
GGame=sessionStorage.GG;

if(GGame==null){
    var GGame="<li>"+XH+"被杀死了，其实真实身份是："+JS+"</li>";
    $('.GG').html(GGame);
}
else{
    GGame+="<li>"+XH+"被杀死了，其实真实身份是："+JS+"</li>";
    $('.GG').html(GGame);
}

console.log(Weather);
sessionStorage.GG=GGame;

if(Weather=="Night"){
    $('.page-footer-button').text('去杀人');
}
else {
    $('.page-footer-button').text('去投票');
}
var SW=0;
var SS=0;
var PM=0;
for(var i=0;i<Totalarr.length;i++){
    if(Totalarr[i]=='死亡') SW++;
    if(Totalarr[i]=='杀手') SS++;
    if(Totalarr[i]=='平民') PM++;
}
console.log('死亡数:'+SW);
console.log('杀手数:'+SS);
console.log('平民数:'+PM);


switch (SS){
    case PM:
        $('.page-footer-button').text('查看结果');
        alert('杀手胜利');
        break;
    case  0:
        $('.page-footer-button').text('查看结果');
        alert('平民胜利');
        break;
}

$('.page-footer-button').click(function(){
   switch (SS){
       case PM:
           location.href='JS4-04.html';
           break;
       case 0:
           location.href='JS4-04.html';
           break;
       default:
           location.href='JS4-02.html';
   }
});


//$('.page-footer-button').click(function(){
//    //location.href ="JS4-02.html";
//    if (SS===0){
//        location.href ="JS4-04.html";
//    }
//    else if(SS==PM){
//        location.href ="JS4-04.html";
//    }
//    else {
//        location.href ="JS4-02.html";
//    }
//});
//
//if(SS===0){
//    $('.page-footer-button').text('查看结果');
//    alert('游戏结束，平民胜利');
//}
//if (SS==PM){
//    $('.page-footer-button').text('查看结果');
//    alert('游戏结束，杀手胜利');
//}
