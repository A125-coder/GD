for(var caro=document.getElementById("carousel"),left_btn=document.getElementById("carou_left"),right_btn=document.getElementById("carou_right"),text_p=document.querySelectorAll(".text_rew"),root=document.getElementById("root"),index=0,text_slide=[],i=0;i<text_p.length;i++)text_slide[i]=text_p[i];root.innerHTML=text_p[0].innerHTML,root.style.textAlign="center",left_btn.addEventListener("click",function(){--index<0&&(index=text_slide.length-1),root.innerHTML=text_p[index].innerHTML}),right_btn.addEventListener("click",function(){++index==text_slide.length&&(index=0),root.innerHTML=text_p[index].innerHTML});var main=document.getElementById("main"),small_slike=document.getElementsByClassName("small-slike"),slike=document.getElementsByClassName("slike")[0],left=document.getElementsByClassName("left")[0],right=document.getElementsByClassName("right")[0];for(i=0;i<small_slike.length;i++)small_slike[i].addEventListener("click",run);function run(){var e=this.getAttribute("src");main.setAttribute("src",e)}left&&left.addEventListener("click",lft),right&&right.addEventListener("click",rght);var pos=0;function lft(){null!=pos&&(0==pos||(pos+=150,slike.style.marginLeft=pos+"px",slike.style.transition="all 1s"))}function rght(){null!=pos&&(pos-=150,slike.style.marginLeft=pos+"px",slike.style.transition="all 1s",-2400==pos&&(pos=150))}
//# sourceMappingURL=main.js.map
