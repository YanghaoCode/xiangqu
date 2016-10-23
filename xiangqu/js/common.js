//top的logo
$(".top-left").hover(function(){
	$(".top-left").css({
		opacity: 0.8
	})
},function(){
	$(".top-left").css({
		opacity: 1
	})
})

//二维码的显示
$(".mouseErweima").hover(function(){
	$(".erweima").css({
		display:"block"
	});
},function(){
	$(".erweima").css({
		display:"none"
	})
})


//ban

$(".ban-left a").hover(function(){
	$(".banFirst").removeClass();
	$(this).addClass("active");
},function(){
	$(this).removeClass();
})


//ban的搜索框
$(".ban-right .text").focus(function(){
	$(".search").addClass("active");
	$(".search li").hover(function(){
		$(this).addClass("active");
	},function(){
		console.log($(this))
		$(this).removeClass();
	})
})
$(".ban-right .text").blur(function(){
	$(".search").removeClass("active");
})
