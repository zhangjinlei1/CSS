/** Created by Raninbow on 2016/8/18. ...*/
//玩家人数
var gameNum;
var TotalArrStr;
function playGame(){
    //判断人数是否为区间数
    gameNum=document.getElementById("num").value; //输入框赋予
    if (gameNum>=4 && gameNum<=16){
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
    var killerNum=Math.floor(gameNum/4);//杀手数量
    for (var  i = 0;i<gameNum;i++){
        TotalArr[i] = "平民";
    }
    for (var i = 0;i<killerNum;i++){
        TotalArr[i] = "杀手";
    }
    TotalArr.sort(function () {
        return 0.5 - Math.random()
    });
    for ( var j = 0; j < gameNum; j++) {
        detail = detail+ (j + 1) + "号—" + TotalArr[j] + "<br/>";
        document.getElementById("role").innerHTML = detail;
    }
    TotalArrStr = JSON.stringify(TotalArr);
    sessionStorage.sth = TotalArrStr;
}
function start(){
    if(TotalArrStr==null){
        alert("请先设置人数并且分配角色后");
    }
    else {
        location.href="../JS-03/JS3-1.html";
    }
}
