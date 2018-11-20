//鼠标停留在产品上的动态
var lis=document.querySelectorAll(".result_list>li")
var btns=document.getElementsByClassName("btn");
for(var i=0;i<lis.length;i++){
	(function(j){
		lis[j].onmouseover=function(){
			lis[j].style.border="1px solid #D8011A";
			btns[j].style.background="#D8011A";
			btns[j].style.color="white";
		}
		lis[j].onmouseout=function(){
			lis[j].style.border="1px solid #ffffff";
			btns[j].style.background="#ffffff";
			btns[j].style.color="#C80000";
		}
	})(i)
}
