
//品牌详情的ajax获取

$.get("../json/prod-introduce.json",function(data){
	var html = "<img src="+data[0].imgSrc+"/><div class=\"introduce-right\">"+
						"<h2>"+data[0].name+"</h2>"
						+"<p>"+data[0].desc+"</p>"
					+"</div>"
	$("#introduce a").html(html);
})


//商品详情 放大镜区域

$.get("../json/prod-fdj.json",function(data){
	var sizeHtml = "";
	$.each(data[0].size, function(i,o) {
		sizeHtml += "<p >"+o.size1+"<b>√</b></p>"
	});
	
	var colorHtml = "";
	$.each(data[0].color, function(i,o) {
		colorHtml += "<p >"+o.color1+"<b>√</b></p>"
	});
	
	var html = "<div class=\"fdj-left\">"
					+"<img src="+data[0].imgSrc+"/>"
					+"<div class=\"fdj-smallBox\"></div>"
				+"</div>"
				+"<div class=\"fdj-right\">"
					+"<h2>"+data[0].name+"</h2>"
					+"<span>设计师</span>&nbsp;<span>"+data[0].username+"</span><br />"
					+"<span>品牌 </span>&nbsp;<span>"+data[0].brand+"</span><br />"
					+"<span>尺码</span>"
					+"<div class=\"prd-size\">"
						+sizeHtml
					+"</div><br />"
					+"<span>颜色</span>"
					+"<div class=\"prd-color\">"
						+colorHtml
					+"</div><br />"
					+"<span>数量</span>"
					+"<div class=\"btn-num\">"
						+"<b class=\"jian\">-"
						+"</b>"
						+"<input type=\"text\" value=\"1\" />"
						+"<b class=\"jia\">+"
						+"</b>"
				+"</div>"
					+"<em>库存<em>"+data[0].kucun+"</em>件</em>"
					+"<h3>￥<strong>"+data[0].price+"</strong></h3>"
				+"	<div class=\"prd-something\">"
						+"<p>包邮</p>"
						+"<a href=\"#\">联系卖家</a>"
					+"</div><br />"
					+"<div class=\"buyAndCar\">"
						+"<a href=\"#\" class=\"buy\">立即购买</a>"
						+"<a data-pid="+data[0].id+" href=\"#\" class=\"addCar\">加入购物车</a>"
				+"	</div>"
					+"<div class=\"promise\">"
						+"<img src=\"../images/prd_24h.png\"/>"
						+"<span>24小时发货</span>&nbsp;"
						+"<img src=\"../images/prd-danbao.png\"/>"
						+"<span>担保交易</span>"
					+"</div>"
					+"<img src=\"../images/prd-wechat.png\"/>"
				+"</div>"
				+"<div class=\"fdj-big\"><img src="+data[0].imgSrc+"/></div>"
				
			$("#fdj").html(html);
			colorAndSize();	
			addToShoppingcar();
			fangdajing();
})


//添加购物车

function addToShoppingcar(){
	$(".fdj-right .buyAndCar a:last").click(function(){
		alert("添加成功")
	var id = $(this).data("pid");
	console.log($(this).parent().parent())
	var pname = $(this).parent().parent().children("h2").html();
	var img =  $(this).parent().parent().prev().children("img").attr("src");
	var price = $(this).parent().prev().prev().prev().children().html();
	var color = $(this).parent().parent().children(".prd-color").children(".active").text();
	var count = $(this).parent().parent().children(".btn-num").children("input").val();
	var str = id +"#" +pname +"#"+img+"#"+price +"#"+color+"#"+count;
	
	var shopcar = $.cookie("shoppingcar");
	if(shopcar){
		var newStr = strOper.add(shopcar,str);
		$.cookie("shoppingcar",newStr);
	}else{
		$.cookie("shoppingcar",str,{
			expires:7
		})
	}
	console.log($.cookie("shoppingcar"))
})
	
//左右加减键

$(".jia").click(function(){
	var num = $(".btn-num>input").val();
	num++;
	$(".btn-num>input").val(num);
})
$(".jian").click(function(){
	var num = $(".btn-num>input").val();
	num--;
	if(num<1){
		num=1;
		alert("亲 不能低于一件哦")
	}
	$(".btn-num>input").val(num);
})

}

//放大镜的实现

	function fangdajing(){
		$(".fdj-left").hover(function(){
			$(".fdj-left .fdj-smallBox").addClass("active");
			$(".fdj-big").addClass("active");
			$(".fdj-left").mousemove(function(e){
				var $left = e.clientX-$(".fdj-left").offset().left-$(".fdj-left .fdj-smallBox").width()/2;
				var $top = e.clientY-$(".fdj-left").offset().top+$(window).scrollTop()-$(".fdj-left .fdj-smallBox").height()/2;
				if($left<0){
					$left=0
				}
				if($top<0){
					$top=0
				}
				if($left>$(".fdj-left").width()-$(".fdj-left .fdj-smallBox").width()){
					$left=$(".fdj-left").width()-$(".fdj-left .fdj-smallBox").width()
				}
				if($top>$(".fdj-left").height()-$(".fdj-left .fdj-smallBox").height()){
					$top=$(".fdj-left").height()-$(".fdj-left .fdj-smallBox").height()
				}
				$(".fdj-left .fdj-smallBox").css({
					left:$left,
					top:$top
				})
				$(".fdj-big img").css({
					left:-$left*4,
					top:-$top*4
				})
			})
		},function(){
			$(".fdj-left .fdj-smallBox").removeClass("active");
			$(".fdj-big").removeClass("active");
		})
	}


//同类推荐 的ajax获取
$.get("../json/prod-same.json",function(data){
	var html ="";
	$.each(data, function(i,o) {
		html +=" <li><a href=\"#\"><img src="+o.imgSrc+"/></a></li>"
	});
	$("#same ul").html(html);
})


//商品标签 ajax获取

$.get("../json/prod-tag.json",function(data){
	var html = "";
	$.each(data, function(i,o) {
		html += "<a href=\"#\" >"+o.tag+"</a>"
	});
	$(".prdTag-left").html(html);

})


$.get("../json/prod-information.json",function(data){
	var html = "";
	$.each(data, function(i,o) {
		html += "<span>"+o.name+" ：</span><span>"+o.desc+"</span><br />"
	});
	$(".prd-desc").html(html);

})
//商品详情介绍的图片
$.get("../json/prod-pics.json",function(data){
	var html = "";
	$.each(data,function(i,o){
		html += "<img src="+o.imgSrc+"/>"
	});
	$(".prd-img").html(html)
})


//likeThis

$.get("../json/prod-likeThis.json",function(data){
	var html ="";
	$.each(data, function(i,o) {
		html += "<a href=\"#\"><img src="+o.imgSrc+"/></a>"	
	});
	$(html).appendTo("#likeThis")
})


//放大镜区域

//尺码的选择
function colorAndSize(){
	$(".prd-size>p").click(function(){
	$(".prd-size>p").removeClass();
	$(this).addClass("active");
	
})

$(".prd-color>p").click(function(){
	$(".prd-color>p").removeClass();
	$(this).addClass("active");
})
}




//同类推荐

$("#same").hover(function(){
	$("#same>div").fadeIn(400);
	
},function(){
	$("#same>div").fadeOut(400);
})


//同类推荐的点击事件

$(".probtnLeft").click(function(){
	$(this).css({
		background:"#969696"
	})
	$(".probtnRight").css({
		background:"#000"
	})
	$("#same>ul").animate({
		left:0
	},600)
})
$(".probtnRight").click(function(){
	$(this).css({
		background:"#969696"
	})
	$(".probtnLeft").css({
		background:"#000"
	})
	$("#same>ul").animate({
		left:-1071
	},600)
	
})



//商品详情和评论的切换

$("#details ul li:first").click(function(){
	$("#details ul li:first img").css({
		display:"block"
	})
	$("#details ul li:last img").css({
		display:"none"
	})
	$("#details .details-content").css({
		display:"block"
	})
	$("#details .details-comment").css({
		display:"none"
	})
})

$("#details ul li:last").click(function(){
	$("#details ul li:first img").css({
		display:"none"
	})
	$("#details ul li:last img").css({
		display:"block"
	})
	$("#details .details-content").css({
		display:"none"
	})
	$("#details .details-comment").css({
		display:"block"
	})
})