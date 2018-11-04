
//window.onerror = function(){return true;}
//function $(id){return document.getElementById(id);}  
//function getHeight(){$("fahuo").style.height=$("forml").offsetHeight-85+"px";}  
//window.onload = function(){getHeight();}  
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
function postcheck(){ 	

 try{
     var yanse = document.getElementsByName("chanpin1");
     if (yanse.length != 0){
     var numa=0;
     for (var i=0; i<yanse.length; i++){
      if(yanse[i].checked) {
      numa++;
      }
     }
     if(numa==0) {
	  layer.alert("还未选择【"+shuxing[0]+"】，请选择后再提交");
      return false;
      }
      }
 }
 catch(ex){
 }

 try{
     var chicun = document.getElementsByName("chanpin2");
     if (chicun.length != 0){
     var numb=0;
     for (var i=0; i<chicun.length; i++){
      if(chicun[i].checked) {
      numb++;
      }
     }
     if(numb==0) {
	  layer.alert("还未选择【"+shuxing[1]+"】，请选择后再提交");
      return false;
      }
      }
 }
 catch(ex){
 }
 
 try{
     var chicun = document.getElementsByName("chanpin3");
     if (chicun.length != 0){
     var numb=0;
     for (var i=0; i<chicun.length; i++){
      if(chicun[i].checked) {
      numb++;
      }
     }
     if(numb==0) {
	  layer.alert("还未选择【"+shuxing[2]+"】，请选择后再提交"); 
      return false;
      }
      }
 }
 catch(ex){
 }
 
 if (document.getElementById("zsid").value=="1") {
  try{
     var chicun = document.getElementsByName("zengsong1");
     if (chicun.length != 0){
     var numb=0;
     for (var i=0; i<chicun.length; i++){
      if(chicun[i].checked) {
      numb++;
      }
     }
     if(numb==0) {
	  layer.alert("还未选择【"+zsshuxing[0]+"】，请选择后再提交"); 	 
      return false;
      }
      }
 }
 catch(ex){
 }
  try{
     var chicun = document.getElementsByName("zengsong2");
     if (chicun.length != 0){
     var numb=0;
     for (var i=0; i<chicun.length; i++){
      if(chicun[i].checked) {
      numb++;
      }
     }
     if(numb==0) {
	  layer.alert("还未选择【"+zsshuxing[1]+"】，请选择后再提交");
      return false;
      }
      }
 }
 catch(ex){
 }
  try{
     var chicun = document.getElementsByName("zengsong3");
     if (chicun.length != 0){
     var numb=0;
     for (var i=0; i<chicun.length; i++){
      if(chicun[i].checked) {
      numb++;
      }
     }
     if(numb==0) {
	  layer.alert("还未选择【"+zsshuxing[2]+"】，请选择后再提交");	 
      return false;
      }
      }
 }
 catch(ex){
 }
}



try{
		if (document.form.name.value==""){
			layer.alert('请填写姓名！');	
			return false;
		}		
    }
    catch(ex){
    }
    try{
		if (document.form.mob.value==""){
			layer.alert('请填写手机号码！');
			return false;
		}
		var form = /^1[3,4,5,6,7,8,9]\d{9}$/;
		if (!form.test(document.form.mob.value)){
			layer.alert('手机号码格式不正确，请重新填写！');
			return false;
		}
    }
    catch(ex){
    } 	
    try{
		if (document.form.province.value==""){
			layer.alert('请选择所在地区！');
			return false;
		}
    }
    catch(ex){
    } 	
    try{
		if (document.form.address.value==""){
			layer.alert('请填写详细地址！');
			return false;
		}
    }
    catch(ex){
    } 	
   // document.form.submit.disabled = true;
   // document.form.submit.value="正在提交，请稍等 >>";
    return true;
}
try{	
	new PCAS("province","city","area");
}
catch(ex){
} 	
try{	
	var thissrc = document.getElementById("yzm").src;
	function refreshCode(){
		document.getElementById("yzm").src=thissrc+"?"+Math.random(); 
	}
}
catch(ex){
} 	
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
function pricea(){
	var product = document.form.product.alt;
	for(var i=0;i<document.form.product.length;i++){
		if(document.form.product[i].checked==true){
			var product = document.form.product[i].alt;
			break;
		}
	}
    if(document.form.mun.value=="" || document.form.mun.value==0){	
		var mun=1;
	}
	else{
		var mun=document.form.mun.value;
	}	
	var price=product*mun;
        document.getElementById("b1").checked='checked';
	document.form.price.value=price;
	document.form.zfbprice.value=price;
	//document.getElementById("showprice").innerHTML=price;
	document.getElementById("zfbyh").innerHTML='';
}
function priceb(){
    var cpxljg = document.getElementById("product");
    var product = cpxljg.options[document.getElementById("product").options.selectedIndex].title; 
    if(document.form.mun.value=="" || document.form.mun.value==0){	
		var mun=1;
	}
	else{
		var mun=document.form.mun.value;
	}	
	var price=product*mun;
	document.getElementById("b1").checked='checked';
	document.form.price.value=price;
	document.form.zfbprice.value=price;
	//document.getElementById("showprice").innerHTML=price;
	document.getElementById("zfbyh").innerHTML='';
}

//***************************  支付宝价格  ***************************
function zfbprize(){
         sprice=document.form.zfbprice.value;
		// alert(sprice);
         document.form.price.value=(sprice*notzfbzk*0.1).toFixed(0)
}
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
function changeItem(i){

if (i==1) {
//document.getElementById("paydiv1").style.display = "block";
//document.getElementById("paydiv0").style.display = "none";
  if (notzfbzk != 0){
     zfbprize();
     document.getElementById("zfbyh").innerHTML='<font color=red><b><s>&nbsp;原价：'+document.form.zfbprice.value+'元&nbsp;</s>&nbsp;'+notzfbzk+'折</b></font>';
  }
}else{
//oprize1();
//document.getElementById("paydiv0").style.display = "block";
//document.getElementById("paydiv1").style.display = "none";
document.getElementById("zfbyh").innerHTML='';
document.form.price.value=document.form.zfbprice.value;
}
}

function addnumber(){
	$('#mun').val(parseInt($('#mun').val())+1);
	pricea();
}

function minnumber(){
	if($('#mun').val()>1){
	$('#mun').val(parseInt($('#mun').val())-1);
	pricea();
	}
}
function inputnumber(){
	var number=parseInt($('#mun').val());
	if(isNaN(number)||number<1){
		$('#mun').val('1');
	    pricea();
	}else{
		$('#mun').val(number);
        pricea();
	}
}


$(document).ready(function(){ 
	 $(".not3chanpin0 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				 $(".not3chanpin0 label").removeClass("now");
				o.addClass("now");
			}
		});
})
$(document).ready(function(){ 
	 $(".not3chanpin1 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".not3chanpin1 label").removeClass("now");
				o.addClass("now");
			}
		});
})
$(document).ready(function(){ 
	 $(".not3chanpin2 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".not3chanpin2 label").removeClass("now");
				o.addClass("now");
			}
		});
})
$(document).ready(function(){ 
	 $(".not3chanpin3 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".not3chanpin3 label").removeClass("now");
				o.addClass("now");
			}
		});
})
$(document).ready(function(){ 
	 $(".zengsong1 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".zengsong1 label").removeClass("now");
				o.addClass("now");
			}
		});
})
$(document).ready(function(){ 
	 $(".zengsong2 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".zengsong2 label").removeClass("now");
				o.addClass("now");
			}
		});
})
$(document).ready(function(){ 
	 $(".zengsong3 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".zengsong3 label").removeClass("now");
				o.addClass("now");
			}
		});
})
/*///////////////////////////////////////// ORDERJSFGX /////////////////////////////////////////*/
var llref = '';
if (document.referrer.length > 0){
	llref = document.referrer;
}
try{
	if (llref.length == 0 && opener.location.href.length > 0){
    llref = opener.location.href;
	}
}
catch (e){}




function xqxchanpin(){	
	 $(".not3chanpin1 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".not3chanpin1 label").removeClass("now");
				o.addClass("now");
			}
			$(o.find("input")).attr("checked","checked");
			
		});
	 $(".not3chanpin2 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".not3chanpin2 label").removeClass("now");
				o.addClass("now");
			}
			$(o.find("input")).attr("checked","checked");
			
		});
	 $(".not3chanpin3 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".not3chanpin3 label").removeClass("now");
				o.addClass("now");
			}
			$(o.find("input")).attr("checked","checked");
			
		});	 
	  $(".zengsong1 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".zengsong1 label").removeClass("now");
				o.addClass("now");
			}
			$(o.find("input")).attr("checked","checked");
			
		});
	  $(".zengsong2 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".zengsong2 label").removeClass("now");
				o.addClass("now");
			}
			$(o.find("input")).attr("checked","checked");
			
		});		
	  $(".zengsong3 label").bind("click",function(){
			var o = $(this);
			if(!o.hasClass("now")){
				$(".zengsong3 label").removeClass("now");
				o.addClass("now");
			}
			$(o.find("input")).attr("checked","checked");
			
		});
}


function change(lens)
{
	var cp1HTML='';
	var cp2HTML='';
	var cp3HTML='';
	var zs1HTML='';
	var zs2HTML='';
	var zs3HTML='';		
	if(abc1.length !=0)
	{	
	    try{ 
		var cp1=abc1[lens].split("#");		
		for(var j=0;j<cp1.length;j++){			
			if(cp1[j]!="")
			{		
				if(cp1[j].indexOf("[]")>-1)
				{				
					var cp11=cp1[j].split("[]");
					cp1HTML=cp1HTML+"<label style=\"text-align:center\"><input name=\"chanpin1\" value=\""+cp11[0]+"\" type=\"radio\"><div><img style=\"padding-top:10px\" src=\""+cp11[1]+"\" /></div><i></i><br>"+cp11[0]+"</label>";
				}else{		
					cp1HTML=cp1HTML+"<label><input name=\"chanpin1\" value=\""+cp1[j]+"\" type=\"radio\">&nbsp;"+cp1[j]+"<i></i></label>";
				}
			}
		}
		document.getElementById("chanpin1").innerHTML=cp1HTML;	
		}
		catch(ex){
		}	
	}
	if(abc2.length !=0)
	{	
		try{
		var cp2=abc2[lens].split("#");		
		for(var j=0;j<cp2.length;j++){			
			if(cp2[j]!="")
			{	
				if(cp2[j].indexOf("[]")>-1)
				{				
					var cp12=cp2[j].split("[]");
					cp2HTML=cp2HTML+"<label style=\"text-align:center\"><input name=\"chanpin2\" value=\""+cp12[0]+"\" type=\"radio\"><div><img style=\"padding-top:10px\" src=\""+cp12[1]+"\" /></div><i></i><br>"+cp12[0]+"</label>";
				}else{		
					cp2HTML=cp2HTML+"<label><input name=\"chanpin2\" value=\""+cp2[j]+"\" type=\"radio\">&nbsp;"+cp2[j]+"<i></i></label>";
				}				
			}
		}
		document.getElementById("chanpin2").innerHTML=cp2HTML;	
		}
		catch(ex){
		}
	}
	if(abc3.length !=0)
	{
		try{
		var cp3=abc3[lens].split("#");		
		for(var j=0;j<cp3.length;j++){			
			if(cp3[j]!="")
			{		
				if(cp3[j].indexOf("[]")>-1)
				{				
					var cp13=cp3[j].split("[]");
					cp3HTML=cp3HTML+"<label style=\"text-align:center\"><input name=\"chanpin3\" value=\""+cp13[0]+"\" type=\"radio\"><div><img style=\"padding-top:10px\" src=\""+cp13[1]+"\" /></div><i></i><br>"+cp13[0]+"</label>";
				}else{		
					cp3HTML=cp3HTML+"<label><input name=\"chanpin3\" value=\""+cp3[j]+"\" type=\"radio\">&nbsp;"+cp3[j]+"<i></i></label>";
				}				
			}
		}
		document.getElementById("chanpin3").innerHTML=cp3HTML;	
		}
		catch(ex){
		}
	}
	if(abz1.length !=0)
	{	
		try{
		var zcp1=abz1[lens].split("#");		
		for(var j=0;j<zcp1.length;j++){			
			if(zcp1[j]!="")
			{	
				if(zcp1[j].indexOf("[]")>-1)
				{				
					var zs11=zcp1[j].split("[]");
					zs1HTML=zs1HTML+"<label style=\"text-align:center\"><input name=\"zengsong1\" value=\""+zs11[0]+"\" type=\"radio\"><div><img style=\"padding-top:10px\" src=\""+zs11[1]+"\" /></div><i></i><br>"+zs11[0]+"</label>";
				}else{		
					zs1HTML=zs1HTML+"<label><input name=\"zengsong1\" value=\""+zcp1[j]+"\" type=\"radio\">&nbsp;"+zcp1[j]+"<i></i></label>";
				}		
			}
		}
		document.getElementById("zengsong1").innerHTML=zs1HTML;	
		}
		catch(ex){
		}
	}
	if(abz2.length !=0)
	{		
		try{
		var zcp2=abz2[lens].split("#");		
		for(var j=0;j<zcp2.length;j++){			
			if(zcp2[j]!="")
			{	
				if(zcp2[j].indexOf("[]")>-1)
				{				
					var zs12=zcp2[j].split("[]");
					zs2HTML=zs2HTML+"<label style=\"text-align:center\"><input name=\"zengsong2\" value=\""+zs12[0]+"\" type=\"radio\"><div><img style=\"padding-top:10px\" src=\""+zs12[1]+"\" /></div><i></i><br>"+zs12[0]+"</label>";
				}else{		
					zs2HTML=zs2HTML+"<label><input name=\"zengsong2\" value=\""+zcp2[j]+"\" type=\"radio\">&nbsp;"+zcp2[j]+"<i></i></label>";
				}			
			}
		}
		document.getElementById("zengsong2").innerHTML=zs2HTML;
		}
		catch(ex){
		}		
	}
	if(abz3.length !=0)
	{	
		try{
		var zcp3=abz3[lens].split("#");		
		for(var j=0;j<zcp3.length;j++){			
			if(zcp3[j]!="")
			{	
				if(zcp3[j].indexOf("[]")>-1)
				{				
					var zs13=zcp3[j].split("[]");
					zs3HTML=zs3HTML+"<label style=\"text-align:center\"><input name=\"zengsong3\" value=\""+zs13[0]+"\" type=\"radio\"><div><img style=\"padding-top:10px\" src=\""+zs13[1]+"\" /></div><i></i><br>"+zs13[0]+"</label>";
				}else{		
					zs3HTML=zs3HTML+"<label><input name=\"zengsong3\" value=\""+zcp3[j]+"\" type=\"radio\">&nbsp;"+zcp3[j]+"<i></i></label>";
				}						
			}
		}
		document.getElementById("zengsong3").innerHTML=zs3HTML;	
		}
		catch(ex){
		}
	}
	
	xqxchanpin();		
}

/*///////////////////////////////////////// ORDERJSEND /////////////////////////////////////////*/