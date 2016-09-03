/**
 * Created by Raninbow on 2016/8/27.
 */

var oDay=document.getElementById("one-day");
var oInside=document.getElementById("day-none");
var oKiller=document.getElementById("killer");
oDay.onclick=function(){
    if(oInside.style.display=="none"){
        oInside.style.display="block";
        console.log(oInside);
    }
    else {
        oInside.style.display="none";
        console.log(oInside);
    }
};
oKiller.onclick=function(){
    location.href='JS4-02-1.html';
};

