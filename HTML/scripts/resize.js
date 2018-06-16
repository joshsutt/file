// JavaScript Document
$(document).ready(function(){
	$(".dragDivider").on("mousedown", initResize);//enable vertical Helper
});



function initResize(f){
	var me = this;
	var dir = "height";
	var screen = "screenY";
	var sign = 1;
	
	if($(me).parent().attr("data-orientation")=="l"||$(me).parent().attr("data-orientation")=="r"){
		dir = "width";
		screen = "screenX";
	}
	if($(me).parent().attr("data-orientation")=="d"||$(me).parent().attr("data-orientation")=="r"){
		sign = -1;
	}
	
	var prevHeight = $(me).prev()[dir]();
	var st = f[screen];
	$(document).on("mousemove", function(e){

		//$(me).prev()[dir]((prevHeight+(e[screen]-st))/$(".content.main")[dir]()*100+"%");
		$(me).prev().css("flex-basis", prevHeight+sign*(e[screen]-st));
	});
	
	$(document).one("mouseup", function(){
		$(document).unbind();
	});
}