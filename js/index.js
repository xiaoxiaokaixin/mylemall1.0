/*轮播图*/
 function task(){
      var img=lunbo.querySelector(".show");
      img.className="";
      if(img.nextElementSibling!=null)
        img.nextElementSibling.className="show" ;
      else
        img.parentNode.children[0].className="show";
    }
  var timer=setInterval(task,3000);
  lunbo.onmouseover=function(){
    clearInterval(timer);
  }
  lunbo.onmouseout=function(){
    timer=setInterval(task,3000);
  }

/*列表显示隐藏*/

for(var i=0;i<list_show.children.length;i++){
    var li=list_show.children[i];
    var div=li.parentElement.nextElementSibling;
    li.onmouseover=function(){
      div.style.display="block";
    }
    div.onmouseover=function () {
      div.style.display="block";
    }
    div.onmouseout=function(){
      div.style.display="none";
    }
    li.onmouseout=function(){
      div.style.display="none";
    }
}









