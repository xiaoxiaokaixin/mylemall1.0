/*头部*/
//鼠标触发二维码
var span=document.getElementById("mobie");
var div=span.nextElementSibling;
div.style.display="none";
span.onmouseover=function(){
	div.style.display="block";
}
div.onmouseover=function(){
	div.style.display="block";
}
div.onmouseout=function(){
	div.style.display="none";
}
span.onmouseout=function(){
	div.style.display="none";
}







