
//用户名
$(".zc-userName input").focus(function(){
	var $v =$(this).val();
	if(!$v){
		$(this).parent().next().html("支持汉字、字母、数字、“-”“_”的组合，4-20个字符")
	}
	$(this).parent().next().addClass("active")
})

$(".zc-userName input").blur(function(){
	var $v =$(this).val()
	if(!$v){
		$(this).parent().next().removeClass("active")
	}
	else{
		//格式正确
		if(regExpManger.userNameReg.test($v)){
			if($v.length>4&&$v.length<20){
				$(this).parent().next().html("该用户名可以使用")
			}else{
				$(this).parent().next().html("长度只能在4-20个字符之间")
			}
		}
	}
	
})



//密码

$(".zc-password input").focus(function(){
	var $v =$(this).val();
	if(!$v){
		$(this).parent().next().html("密码由6-20位英文字母、数字或符号组成")
	}
	$(this).parent().next().addClass("active")
})

$(".zc-password input").blur(function(){
	var $v =$(this).val()
	if(!$v){
		$(this).parent().next().removeClass("active")
	}
	else{
		//格式正确
		if(regExpManger.wordReg.test($v)){
			if($v.length>6&&$v.length<20){
				$(this).parent().next().html("该密码可以使用")
			}else{
				$(this).parent().next().html("长度只能在6-20个字符之间")
			}
		}else{
			$(this).parent().next().html("密码格式不正确，需要使用字母和数字组合的形式")
		}
	}
	
})


//确认密码
$(".zc-passwordAgain input").focus(function(){
	var $v =$(this).val();
	if(!$v){
		$(this).parent().next().html("请再次输入密码")
	}
	$(this).parent().next().addClass("active")
})

$(".zc-passwordAgain input").blur(function(){
	var $v =$(this).val()
	if(!$v){
		$(this).parent().next().removeClass("active")
	}
	else{
		var $password = $(this).parent().parent().prev().children(".dl-password").children("input").val();
		if($v==$password){
			$(this).parent().next().html("两次输入密码一致")
		}else{
			$(this).parent().next().html("两次输入的密码不一致")
		}
	}
	
})


//验证邮箱格式

$(".zc-email input").focus(function(){
	var $v =$(this).val();
	if(!$v){
		$(this).parent().next().html("完成验证后，你可以通过本邮箱找回密码")
	}
	$(this).parent().next().addClass("active")
})

$(".zc-email input").blur(function(){
	var $v =$(this).val()
	if(!$v){
		$(this).parent().next().removeClass("active")
	}
	else{
		//格式正确
		if(regExpManger.emaiReg.test($v)){
			$(this).parent().next().html("邮箱格式正确")
		}else{
			$(this).parent().next().html("邮箱格式不正确")
		}
	}
	
})


//手机号
$(".zc-telphone input").focus(function(){
	var $v =$(this).val();
	if(!$v){
		$(this).parent().next().html("使用该手机号获取验证码完成注册")
	}
	$(this).parent().next().addClass("active")
})

$(".zc-telphone input").blur(function(){
	var $v =$(this).val()
	if(!$v){
		$(this).parent().next().removeClass("active")
	}
	else{
		//格式正确
		if(regExpManger.mobileReg.test($v)){
			if($v.length==11){
				$(this).parent().next().html("该手机可以注册")
			}else{
				$(this).parent().next().html("手机号码长度不正确")
			}
		}else{
			$(this).parent().next().html("手机号码格式不正确")
		}
	}
	
})
