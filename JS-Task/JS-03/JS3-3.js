/**
 * Created by Raninbow on 2016/8/21.
 */
TotalArrStr = sessionStorage.sth;
Totalarr = JSON.parse(TotalArrStr);
console.log("读取",TotalArrStr);

var clickNum=0; //点击次数
var lookNum=1;
function rainbow(){
    clickNum++;
    console.log(clickNum);
    if(clickNum>Totalarr.length*2-1 ){ //点击次数大于数组长度时候，*2是因为要点击两次
         location.href="../JS-02/JS-02.html";//return
    }
    else{
        ess();
    }
}
function ess(){
    var img=document.getElementsByClassName("flop-img")[0];//图片
    var num=document.getElementsByClassName("flop-num")[0];//编号
    var font=document.getElementsByClassName("flop-font")[0];//角色
    var op=document.getElementsByClassName("page-footer-button")[0];//按钮
    if(clickNum % 2==0){//点击次数为偶数 查看页面
        lookNum++;
        img.src="JS3-3.png";
        op.innerHTML="查看"+lookNum+"号身份";
        num.innerHTML=lookNum;
        font.style.display="none";
    }
    else{//点击为奇数的时候
        font.innerHTML="角色:"+Totalarr[lookNum-1];
        img.src="JS3-4.png";
        font.style.display="block";
        if(clickNum==Totalarr.length*2-1){
            op.innerHTML="法官查看";
        }
        else {
            op.innerHTML="隐藏并传递給"+(lookNum+1)+"号";
        }
    }
}