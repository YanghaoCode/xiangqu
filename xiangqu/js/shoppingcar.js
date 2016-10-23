



var cookieStr = $.cookie("shoppingcar");
if(cookieStr){
	$(".all-choice").removeClass("hide");
	var json = strOper.get(cookieStr);
	var html = "";
	$.each(json, function(i,o) {
//		 " <div class=\"carPrd-top\"><input type=\"checkbox\" />"
//				+"<b>分享人：</b><span>左手右手旗舰店</span></div>"
		html +=	"<div class=\"car-prd\"><div class=\"carPrd-bottom\"><input type=\"checkbox\" /><div class=\"car-pic\">"
				+"<img src="+o.img+"/></div>"
				+"<p>"+o.name+"</p>"
				+"<div class=\"car-color\"><span>颜色分类：</span><span>"+o.color+"</span>"
				+"</div><div class=\"car-num\"><div class=\"car-jian\" data-pid= "+o.id+">-</div>"
				+"<input type=\"text\" value="+o.count+" class=\"carNum-text\" />"
				+"<div class=\"car-jia\" data-pid= "+o.id+">+</div>"
				+"</div><b>"+o.price+"</b><i data-pid="+o.id+">删除</i></div></div>"	
	});
	var $newDiv = $("<div class =\"car-all\"></div>")
	$newDiv.append(html)
	var ahtml = "<div class=\"car-count\"><input type=\"checkbox\" />"
				+"<i>全选</i><span>删除</span><p>已选商品 <b>0</b> 件</p>"
				+"<p>合计  (不计含运费)</p><strong>￥<b>0.00</b></strong></div>"
	+"<div class=\"jiesuan\"><a href=\"#\"><img src=\"../images/jiesuan.png\"/></a></div>"
	$newDiv.appendTo("#car")
	$(ahtml).appendTo("#car");
	addAndRemove();
	changeCheck();
	changeAll();
	removeAll();
}else{
	$(".all-choice").addClass("hide");
	$("<img src=\"../images/no-shoppingcar.bmp\"/>").appendTo("#car")
	
}
	





function addAndRemove(){
	$(".car-jian").click(function(){
		var num = $(this).next().val();
		num--;
		if(num<1){
			alert("亲,商品数量不能低于1哦")
			num=1;
		}else{
			var id = $(this).data("pid");
			var str = $.cookie("shoppingcar");
		//	console.log(str)
			
			var newStr = strOper.counter(str,id,-1);
			$.cookie("shoppingcar",newStr);
		//	console.log($.cookie("shoppingcar"))
		}
		$(this).next().val(num);
	})
	
	$(".car-jia").click(function(){
		var num = $(this).prev().val();
		num++;
			var id = $(this).data("pid");
			var str = $.cookie("shoppingcar");
//			console.log(str)
			var newStr = strOper.counter(str,id,1);
			$.cookie("shoppingcar",newStr);
//			console.log($.cookie("shoppingcar"))
		$(this).prev().val(num);
	})
	
	$(".car-num").next().next().click(function(){
		var id = $(this).data("pid");
		var str = $.cookie("shoppingcar");
//		console.log($.cookie("shoppingcar"))
		var newStr = strOper.del(str,id);
		$.cookie("shoppingcar",newStr);
//		console.log($.cookie("shoppingcar"))
		
		$(this).parent().parent().fadeOut(400)
	})
}



function changeCheck(){
	$(".carPrd-bottom :checkbox").change(function(){
//		for(var i=0;i<$(".carPrd-bottom :checkbox").length;i++){
//			
//		}			
			var allPrice = 0;
			var allNum =0;
		$.each($(".carPrd-bottom :checkbox"), function(i,o) {
			if($(o).is(":checked")){
				var num = $(o).parent().children(".car-num").children("input").val();
				var price = $(o).parent().children("b").html();
				allNum+=parseInt(num);
				allPrice+=parseInt(price)*parseInt(num);
//				$(".car-count").children(":eq(3)").children("b").html(num);
//				$(".car-count").children(":eq(5)").children("b").html(num*price);
			}
		});
		$(".car-count").children(":eq(3)").children("b").html(allNum);
		$(".car-count").children(":eq(5)").children("b").html(allPrice);
		
		
		
//		if($(this).is(":checked")){
//			var num = $(this).parent().children(".car-num").children("input").val();
//			var price = $(this).parent().children("b").html();
//			console.log(num)
//			$(".car-count").children(":eq(3)").children("b").html(num);
//			$(".car-count").children(":eq(5)").children("b").html(num*price);
//		}else{
//			$(".car-count").children(":eq(3)").children("b").html(0);
//			$(".car-count").children(":eq(5)").children("b").html(0);
//		}
	})
}


function changeAll(){
	$(".all-choice :checkbox").change(function(){
		if($(this).is(":checked")){
			$(".carPrd-bottom :checkbox").prop("checked",true);
			
		var allPrice = 0;
		var allNum =0;
		$.each($(".carPrd-bottom :checkbox"), function(i,o) {
			if($(o).is(":checked")){
				var num = $(o).parent().children(".car-num").children("input").val();
				var price = $(o).parent().children("b").html();
				allNum+=parseInt(num);
				allPrice+=parseInt(price)*parseInt(num);
//				$(".car-count").children(":eq(3)").children("b").html(num);
//				$(".car-count").children(":eq(5)").children("b").html(num*price);
			}
		});
		$(".car-count").children(":eq(3)").children("b").html(allNum);
		$(".car-count").children(":eq(5)").children("b").html(allPrice);
			
			
		}else{
			$(".carPrd-bottom :checkbox").prop("checked",false);
			changeCheck();
		}
	
	})
}


function removeAll(){
	$(".car-count").children("span").click(function(){
		if($(".all-choice :checkbox").is(":checked")){
			$.cookie("shoppingcar","");
			$(".car-all").fadeOut(400).remove();
			$(".all-choice").addClass("hide");
			$(".car-count").fadeOut(400).remove();
			$(".jiesuan").fadeOut(400).remove();			
			$("<img src=\"../images/no-shoppingcar.bmp\"/>").appendTo("#car")
		}
	})
}
