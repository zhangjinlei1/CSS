/**
 * Created by Raninbow on 2016/8/25.
 */
TotalArrStr = sessionStorage.sth;
Totalarr = JSON.parse(TotalArrStr);
console.log(Totalarr);

var ul=document.getElementsByClassName("game")[0];
for(var i=0;i<Totalarr.length;i++){
    var divNum=document.createElement("div");
    var liList=document.createElement("li");
    var PNum=document.createElement("p");
    var SpanNum=document.createElement("span");
    SpanNum.innerHTML=Totalarr[i];
    PNum.innerHTML=i+1+"号";
    divNum.appendChild(SpanNum);
    divNum.appendChild(PNum);
    liList.appendChild(divNum);
    ul.appendChild(liList);
}
function gameGo(){
    location.href="JS3-1.html";
}
