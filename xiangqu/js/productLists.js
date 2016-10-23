

//商品列表的ajax获取

$.get("../json/list.json",function(data){
	var html ="";
	$.each(data, function(i,o) {
		html+= "<dl><dt><img color="+o.color+" data-pid="+o.id+"  src="+o.imgSrc+"/>"
					+"<span></span></dt><dd><div class=\"dd1\"><p>-----</p>"
					+"<i>￥</i><b>"+o.price+"</b><img src=\"../images/like.png\"/>"
					+"<div class=\"changeNum\"><span>0</span><br /><span>+1</span>"
					+"</div><p>-----</p></div><div class=\"dd3\">"
					+"<a href=\"#\">"+o.brand+"<span>的全部商品</span></a></div><div class=\"dd2\">"
					+"<span>"+o.tag1+"</span><span> · </span><span>"+o.tag2+"</span>"
					+"</div></dd></dl>"
	});
	$("#list").html(html);
	
	listTexiao();
})

function listTexiao(){
	//点赞 加一的效果
$("dl dd img").hover(function(){
	$(this).next().stop().animate({
		top:-31
	},400)
},function(){
	$(this).next().stop().animate({
		top:0
	},400)
})

var listFlag = true;
$("dl dd img").click(function(){
	$(this).attr("src","../images/liked.png");
	$(this).clone().appendTo("body").css({
		position:'absolute',
		left:$(this).offset().left,
		top:$(this).offset().top
	}).animate({
		left:1000,
		top:0,
		 width:0,
        height:0
	},800)
	$(this).next().html("<span>+1</span><br /><span>liked</span>")
})

//添加购物车的特效以及添加cookie
$("#list>dl>dt>img").click(function(){
	var color =$(this).attr("color");
	var id = $(this).data("pid");
	var pname = $(this).parent().next().children(".dd2").children(":first").html()+"&&"+$(this).parent().next().children(".dd2").children(":last").html();
	var img = $(this).attr("src");
	var price = $(this).parent().next().children(".dd1").children("b").html();
	var str = id +"#" +pname +"#"+img+"#"+price +"#"+color+"#"+1;
	var shopcar = $.cookie("shoppingcar");
	if(shopcar){
		var newStr = strOper.add(shopcar,str);
		$.cookie("shoppingcar",newStr);
	}else{
		$.cookie("shoppingcar",str,{
			expires:7
		})
	}

	
	
	$(this).clone().appendTo("body").css({
		position:'absolute',
		left:$(this).offset().left,
		top:$(this).offset().top
	}).animate({
		left:1000,
		top:0,
		 width:0,
        height:0
	},800)
})



//店铺名伸长的效果
var $aWidth = $("#list dl dd a").width();

$("#list dl dd a").hover(function(){
		$(this).stop().animate({
			width:$aWidth+100
		},600)
		$(this).addClass("active");
		$(this).children().css({
			display:'inline'
		})	
},function(){
	$(this).stop().animate({
		width:$aWidth
	},600)
	$(this).removeClass();
	$(this).children().css({
		display:'none'
	})
})
}


$("#listTit>a").click(function(){
	$("#listTit>a").removeClass();
	$(this).addClass("active")
})
