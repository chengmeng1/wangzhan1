// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("小姐姐再考虑一下呗");
	   }else if(Dianji==2){
		   		alert("你是我见过的最善良可爱的女孩儿");
		   		
	   }else if(Dianji==3){
		   		alert("永远爱你");
		   		
	   }else if(Dianji==4){
		   		alert("工资上交");
		   		
	  }else if(Dianji==5){
		   		alert("绝不惹你生气");
	  }else if(Dianji==6){
		   		alert("小姐姐确定不再考虑一下了吗？");
	  }else if(Dianji==7){
		   		alert("那好吧，祝你以后找到更好");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("小姐姐终于同意了 我爱你");
	}
	

}