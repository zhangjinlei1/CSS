/**
 * Created by Raninbow on 2016/8/29.
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
    SpanNum.setAttribute('class','Killer-no');
    SpanNum.innerHTML=Totalarr[i];
    PNum.innerHTML=i+1+"号";
    divNum.appendChild(SpanNum);
    divNum.appendChild(PNum);
    liList.appendChild(divNum);
    ul.appendChild(liList);
}

var Bon=document.getElementsByTagName("li");
var KillerNo=document.getElementsByClassName('Killer-no');
console.log(KillerNo);
console.log(KillerNo.innerHTML=='杀手');
//if (Bon[i].innerHTML=='杀手'){
//    alert('杀手不能选择杀手');
//}
var a;
for (var i=0; i<Bon.length;i++){
    Bon[i].onclick= function () {
        if (this.firstChild.firstChild.innerHTML=='杀手'){
            alert('杀手不能选择杀手');
        }
        else if(this.className=="boxLi"){
            this.className ="";
        }
        else{
           if(a==null){
               this.className="boxLi";
               a=parseInt(this.firstChild.firstChild.nextSibling.innerHTML);
               console.log(a)
           }
            else if(parseInt(this.firstChild.firstChild.nextSibling.innerHTML)!=a){
               console.log(a);
                Bon[a-1].className ="";
               this.className="boxLi";
               a=parseInt(this.firstChild.firstChild.nextSibling.innerHTML);
            }
        }
    }
}
var Title=document.getElementsByClassName('header-auto')[0];
var Tlxs=document.getElementsByClassName('Killer-eyes-on')[0];
var Ts=document.getElementsByClassName('Killer-eyes-font')[0];
var An=document.getElementsByClassName('page-footer-button')[0];
var Op=true;
An.onclick=function(){
    if(Op==true){
        Title.innerHTML='投票';
        Tlxs.innerHTML='发言讨论结束。请大家投票';
        Ts.innerHTML='点击票数最多人的头像';
        An.innerHTML='投票';
        Op=false;
    }
    else {
        Title.innerHTML='杀手杀人';
        Tlxs.innerHTML='杀手请睁眼，选择一个你要杀的人';
        Ts.innerHTML='点击一个玩家头像将他杀死';
        An.innerHTML='杀死';
        Op=true;
    }
};
