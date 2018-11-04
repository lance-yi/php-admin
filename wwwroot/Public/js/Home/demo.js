$(function(){

	function scollDown(id,time){
          var liHeight=$("#"+id+" ul li").height();
          var time=time||2500;
          setInterval(function(){
          $("#"+id+" ul").prepend($("#"+id+" ul li:last").css("height","0px").animate({
          	height:liHeight+"px"
          },"slow"));
          },time);
        

	}

	scollDown("pingjia",3000);
	scollDown("fahuo",3000);

});

var sec=0;var min=0;var hou=0;flag=0;
idt=window.setTimeout("update();",1000);
function update(){sec++;document.form.tltime.value=sec;idt=window.setTimeout("update();",1000);}


   var h = $(".comment-inner").height();  
        function commentFn() {
            var commentUl = $('.comment-inner');
            commentUl.css({ 'margin-top': 0 }).stop().animate({ 'margin-top': -h }, 120000, 'linear')
            setInterval(function () {
                commentUl.css({ 'margin-top': 0 }).stop().animate({ 'margin-top': -h }, 120000, 'linear')
            }, 120000)
        }
        commentFn()

 