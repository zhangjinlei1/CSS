/**
 * Created by Raninbow on 2016/8/27.
 */
var oDay=document.getElementById("one-day");
var oInside=document.getElementById("day-none");
var killer=document.getElementById("killer");
oDay.onclick=function(){
  if(oInside.style.display=="block"){
      oInside.style.display="none";
  }
  else {
      oInside.style.display="block";
  }
};
killer.onclick=function(){
    return location.href="../JS-02/JS-02.html";
};
