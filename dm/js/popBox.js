// JavaScript Document
$(document).ready(function(){
	
	$('.btn').on("click",function(){
		var h = $(document).height();
	    var w=this.id.replace("popboxLink","");	
		
		
	  $(".popBox").each(function(){  
			if($(this).attr("nex")==w)
		{
		$('#screen').css({ 'height': h });	
		$('#screen').show();
		$(this).center();
		$(this).fadeIn();
		}
		setTimeout($(".popBox,#screen").fadeOut(1600))
	  });
		return false;
	});
	
	$(".shareBtn").on("click",function(){
		$("#mcover").css("display","block")  // 分享给好友圈按钮触动函数
	});
	
	$("#mcover").on("click",function(){
		$(this).css("display","none")  // 分享给好友圈按钮触动函数
	});
	
	$('.certify').on("click",function(){
		$('#screen').fadeIn();
		$(".certifyPop").center();
		$(".certifyPop").fadeIn();
	})
	
	$('.closeIcon').on("click",function(){
		$('#screen').fadeOut();
		$(".certifyPop").center();
		$(".certifyPop").fadeOut();
	})
	
});
jQuery.fn.center = function(loaded) {
	var obj = this;
	body_width = parseInt($(window).width());
	body_height = parseInt($(window).height());
	block_width = parseInt(obj.width());
	block_height = parseInt(obj.height());
	
	left_position = parseInt((body_width/2) - (block_width/2)  + $(window).scrollLeft());
	if (body_width<block_width) { left_position = 0 + $(window).scrollLeft(); };
	
	top_position = parseInt((body_height/2) - (block_height/2) + $(window).scrollTop());
	if (body_height<block_height) { top_position = 0 + $(window).scrollTop(); };
	
	if(!loaded) {
		
		obj.css({'position': 'absolute'});
		obj.css({ 'top': top_position, 'left': left_position });
		$(window).bind('resize', function() { 
			obj.center(!loaded);
		});
		$(window).bind('scroll', function() { 
			obj.center(!loaded);
		});
		
	} else {
		obj.stop();
		obj.css({'position': 'absolute'});
		obj.animate({ 'top': top_position }, 200, 'linear');
	}
}

//$.fn.extend({click:"tap"});定义全局事件变量，有的手机支持tap，有的支持click。
//$(".free").on($.fn.click,function(){});和$(".free").on("click",function(){});回调函数


//var click = "tap";判断是否支持tap或click事件
//if (!navigator.userAgent.match(/mobile/i)) {
    //click = "click";
//}
//$.fn.extend({
    //click:click
//});


$(document).ready(function(){
	$(".free").on("click",function(){
		//var text = $(this).text().trim();//判断是否包含空闲文本，去掉首尾空格
		//if(text.length > 0){//空闲
			if($(this).hasClass("freeSelected")){//当前已选中
				$(this).removeClass("freeSelected");
			}else{
				$(".free").removeClass("freeSelected");
				$(this).addClass("freeSelected");
			}
		//}
	});
});