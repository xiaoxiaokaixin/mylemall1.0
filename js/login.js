/*登陆方式展开收起*/
var sq=document.getElementById("sq");
sq.onclick=function(){
    var imgs=document.querySelectorAll(".form_fbot a img");
    if(sq.innerHTML=="&lt;收起"){
        sq.innerHTML="展开&gt;";
        imgs[3].style.display="none";
        imgs[4].style.display="none";
        imgs[5].style.display="none";
    }
    else{
        sq.innerHTML="&lt;收起";
        imgs[3].style.display="";
        imgs[4].style.display="";
        imgs[5].style.display="";
    }
}








