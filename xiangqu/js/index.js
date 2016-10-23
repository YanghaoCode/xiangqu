//lbt

//ajax获取轮播图的图
$.get("../json/lbt.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		html += "<img src=" + o.imgSrc + " />"
	});
	html += "<img src=" + data[0].imgSrc + " />"
	$(".lbt-pic").html(html);
	imgOpacity();
});


//ajax获取 大家喜欢 的图
$.get("../json/allLike.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		var ahtml ="";
		$.each(o.imgSrc1, function(j, p){
				ahtml +="<img src="+p.imgSrc+"/>"
				});
		
		html += "<li>"				
			+"<div class='topTx'>"
				+"<img src="+o.topTx+" /> <br />"
				+"<span>"+o.userName+"</span><br />"
				+"</div>"
				+"<div class='midLikes'>"
				+"<i>9分钟前</i><img src='../images/love.jpg' class='lovePic' /><b>喜欢了<b>"+o.count+"</b>个商品</b>"
				+"</div>"
				+"<div class='bottomImgs'>"
				+"<a href='#'>"
				+ahtml
				+"</a>"
				+"</div>"
			+"</li>"
	});
	$(".like-pics>ul").html(html);
	imgOpacity();
});

//ajax获取 设计师品牌 的图
$.get("../json/brand.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		html += "<dl><dt>"
				+"<img src="+o.imgSrc+"/><span></span>"
				+"</dt><dd>"
				+"<a href=\"#\">"+o.name+"</a>"
				+"</dd>"
				+"</dl>"
	});
	html += "<i><a href=\"#\"><p>更多</p>设计师品牌</a></i>"
	$(".brand-right").html(html);
	
	imgOpacity();
	$(".brand-right>dl").hover(function(){
		$(this).children("dd").css({
			background:"#A9A9A9"
		})
	},function(){
		$(this).children("dd").css({
			background:"#f6f6f6"
		})
	})
});

$.get("../json/handwork.json", function(data) {
	var html = "";
	$.each(data, function(i, o) {
		html += "<dl><dt>"
				+"<img src="+o.imgSrc+"/><span></span>"
				+"</dt><dd>"
				+"<a href=\"#\">"+o.name+"</a>"
				+"<p><span>"+o.peoNum+"</span>&nbsp;人关注</p></dd>"
				+"<a href=\"#\"><img src="+o.txSrc+" /></a></dl>"
	});
	html += "<i><a href=\"#\"><p>更多</p>手工艺人</a></i>"
	$(".handwork-bottom").html(html);
	imgOpacity();
	$(".handwork-bottom>dl").hover(function(){
		$(this).children("a").children().css({
			display:"block"
		})
	},function(){
		$(this).children("a").children().css({
			display:"none"
		})
	})
});


//轮播图右键
var index = 0;
$(".lbt-left .jtRight").click(function() {
	index++;
	if(index < 5) {
		$(".lbt-pic").stop().animate({
			left: -841 * index
		}, 400);
		$(".lbt-control").stop().animate({
			left: 168 * index
		})
	}
	if(index == 5) {
		$(".lbt-pic").stop().animate({
			left: -841 * index
		}, 400, function() {
			index = 0;
			$(".lbt-pic").css("left", "0");
			$(".lbt-control").css("left", "0");
		})

	}
})

//轮播图左键
$(".lbt-left .jtLeft").click(function() {
	index--;
	if(index >= 0) {
		$(".lbt-pic").stop().animate({
			left: -841 * index
		}, 400);
		$(".lbt-control").stop().animate({
			left: 168 * index
		})
	}
	if(index < 0) {
		$(".lbt-pic").css({
			left: -841 * 5
		});
		index = 4;
		$(".lbt-pic").stop().animate({
			left: -841 * index
		})
		$(".lbt-control").stop().animate({
				left: 168 * index
			})
			//		$(".lbt-pic").stop().animate({
			//			left:-841*index
			//		},400,function(){
			//			$(".lbt-pic").css({
			//				left:-841*5
			//			});
			//		});
			//		$(".lbt-control").stop().animate({
			//			left:168*0
			//		})
	}
})

var stemp;
$(".lbt-left").hover(function() {
	$(".lbt-left p").fadeIn(200);
	clearInterval(stemp);
}, function() {
	$(".lbt-left p").fadeOut(200);
	addLunbotu();
})
addLunbotu();
$(".lbt-left .jtLeft").hover(function() {
	$(this).css({
		opacity: 0.9
	})
}, function() {
	$(this).css({
		opacity: 0.5
	})
})

$(".lbt-left .jtRight").hover(function() {
	$(this).css({
		opacity: 0.9
	})
}, function() {
	$(this).css({
		opacity: 0.5
	})
})


//图片的透明度效果
function imgOpacity(){
	$("img").hover(function() {
		$(this).css({
			opacity: 0.9
		})
	}, function() {
		$(this).css({
			opacity: 1
		})
	})
}
	

function addLunbotu() {
	stemp = setInterval(function() {
		index++;
		if(index < 5) {
			$(".lbt-pic").stop().animate({
				left: -841 * index
			}, 400);
			$(".lbt-control").stop().animate({
				left: 168 * index
			})
		}
		if(index == 5) {
			$(".lbt-pic").stop().animate({
				left: -841 * index
			}, 400, function() {
				index = 0;
				$(".lbt-pic").css("left", "0");
				$(".lbt-control").css("left", "0");
			})

		}
	}, 2000)
}

//大家喜欢隐藏的分享区
$(".like-pics .lookMore").hover(function() {
	$(".likes_peopleJt").stop().animate({
		left: 20
	}, 200)
}, function() {
	$(".likes_peopleJt").stop().animate({
		left: 0
	}, 80)
})

//分享区自动移动

var likesIndex = 0;
$(".likes-right").click(function() {
	likesIndex++;
	if(likesIndex >= 2) {
		likesIndex = 2;
		$(".lookMore").fadeIn(800);
		$(".likes-right").fadeOut(600)
	}
	if(likesIndex > 0) {
		$(".likes-left").fadeIn(600)
	}
	$(".like-pics ul").stop().animate({
		left: -1071 * likesIndex
	}, 600)
})

$(".likes-left").click(function() {
	likesIndex--;
	if(likesIndex < 1) {
		likesIndex = 0;
		$(".likes-left").fadeOut(600)
	}
	if(likesIndex < 2) {
		$(".likes-right").fadeIn(600)
		$(".lookMore").fadeOut(800);
	}
	$(".like-pics ul").stop().animate({
		left: -1071 * likesIndex
	}, 600)
})

var liketemp;

function likesAddDsq() {
	liketemp = setInterval(function() {
		likesIndex++;
		if(likesIndex >= 2) {
			likesIndex = 2;
			$(".lookMore").fadeIn(800);
			$(".likes-right").fadeOut(600)
		}
		$(".like-pics ul").stop().animate({
			left: -1071 * likesIndex
		}, 600)
	}, 8000);
}

$(".like-pics").hover(function() {
	clearInterval(liketemp);
}, function() {
	likesAddDsq();
})
likesAddDsq();



//设计师品牌的图的特效

$(".brand-right>dl").hover(function(){
	alert(1)
	$(this).children("dd").css({
		background:"black"
	})
},function(){
	
})


//获取好物推荐版块的ajax
$.get("../json/recommend.json", function(data) {
	$.each(data,function(i,o){
		$ul = $("<ul></ul>")
		var html = "";
		$.each(o.ul, function(j,p) {
			html += "<li><img src="+p.imgSrc+"/><p>"+p.name+"</p></li>"
		});
		$ul.html(html);
		$ul.appendTo(".recommend-bigBox")
	})
	recommendSport();
});

function recommendSport(){
	var index = 0;
	$(".recommend-jiantouR").click(function(){
		index++;
		if(index==3){
			index=0
		}
		$(".recommend-bigBox").stop().animate({
			left:-1092*index
		},600)
	})
	$(".recommend-jiantouL").click(function(){
		index--;
		if(index==-1){
			index=2
		}
		$(".recommend-bigBox").stop().animate({
			left:-1092*index
		},600)
	})
	
	$(".recommend-bigBox li").hover(function(){
		$(this).children("p").css({
			color:'#fff',
			background:'#000'
		})
	},function(){
		$(this).children("p").css({
			color:'#000',
			background:'#fff'
		})
	})
}



//品牌广场的tab切换

$(".square-kindsBtn a").mouseenter(function(){
	$(".square-kindsBtn a").removeClass("active")
	$(this).addClass("active");
	var $index =$(this).index()/2;
	$(".square-button ul li").removeClass("active");
	$(".square-button ul li").eq($index).addClass("active")
})
