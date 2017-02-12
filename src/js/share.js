$(function(){
	/*侧边栏*/
	var $headerMenu=0;
	$(".header_menu").click(function(){
		if($headerMenu===0){
			$(".header_menu img").attr("src","img/nav_close1.png");
			$headerMenu=1;
			$("aside").slideDown(300);
		}else{
			$(".header_menu img").attr("src","img/nav_menu1.png");
			$headerMenu=0;
			$("aside").fadeOut(300);
		}
	});
});