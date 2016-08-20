/**
 * Created by Raninbow on 2016/8/18.
 */
//玩家人数
var gamenum;
var TotalArrStr;
function playgame(){
    //判断人数是否为区间数
    gamenum=document.getElementById("num").value; //输入框赋予
    if (gamenum>=6 && gamenum<=16){
        matching();
    }
    else {
        alert("请输入6~16之间的人数");
    }
}
//分配
function matching(){
    var TotalArr = [];
    var detail="";
    var killernum=Math.floor(gamenum/4);//杀手数量
    for (var  i = 0;i<=gamenum;i++){
        TotalArr[i] = "平民";
    }
    for (var i = 0;i<=killernum;i++){
        TotalArr[i] = "杀手";
    }
    TotalArr.sort(function () {
        return 0.5 - Math.random()
    });
    for ( var j = 0; j < gamenum; j++) {
        detail = detail+ (j + 1) + "号—" + TotalArr[j] + "<br/>";
        document.getElementById("role").innerHTML = detail;
    }
    TotalArrStr = JSON.stringify(TotalArr);
    localStorage.sth = TotalArrStr;
}
function start(){
    if(TotalArrStr==null){
        alert("请先设置人数并且分配角色后");
    }
    else {
        location.href="../JS-03/JS3-1.html";
    }
}
