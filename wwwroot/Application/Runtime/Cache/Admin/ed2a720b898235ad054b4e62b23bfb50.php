<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf8" />
<title>修改密码</title>
<link href="/Public/css/Admin/main/main.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="/Public/js/Home/jquery.js"></script>
<script type="text/javascript" src="/Public/js/Admin/main/jquery.validate.pack.js"></script>
<script type="text/javascript" src="/Public/js/Admin/main/jquery.metadata.js"></script>
<script type="text/javascript" src="/Public/js/Admin/main/myblog.js"></script>
<script type="text/javascript" src="/Public/js/Admin/main/jquery.poshytip.js"></script> 
<link rel="stylesheet" href="/Public/css/Admin/main/tip-yellowsimple.css" type="text/css" />
</head>

<body>
<div class="panel">
	<div class="panel-head">
		<span>修改密码</span>
	</div>	
	<form action="/Admin/Index/updatePassword" method="post" id="updatePassword">		
		<table>
			<tr>
				<td><label for="oldPwd">旧密码:</label></td>
				<td><input type="password" name="oldPwd" class="inputStyle" id="oldPwd" title="请正确输入您的旧密码" /></td>
			</tr>
			<tr>
				<td></td>
				<td style="height:10px;"></td>
			</tr>
			<tr>
				<td><label for="newPwd">新密码:</label></td>
				<td><input type="password" name="newPwd" class="inputStyle" id="newPwd" title="请正确输入您的新密码,不得为空，长度为6~16个字符" /></td>
			</tr>
			<tr>
				<td></td>
				<td style="height:10px;"></td>
			</tr>
			<tr>
				<td><label for="repassword">新密码:</label></td>
				<td><input type="password" name="secondPwd" id="secondPwd" class="inputStyle" title="请再次输入您的新密码" /></td>
			</tr>
			<tr>
				<td></td>
				<td style="height:10px;"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="修改" name="Submit"/></td>
			</tr>
		</table>
	</form>
	<script type="text/javascript">
	/*
	 * 修改密码
	 */
		$("#updatePassword").validate({
			rules : {
				oldPwd : {
					required : true,
					rangelength: [6,16]
				},
				newPwd : {
					required : true,
					rangelength: [6,16]
				},
				secondPwd : {
					required : true,
					rangelength: [6,16],
					equalTo:'#newPwd'
				}
			},
			messages : {
				oldPwd : {
					required : "旧密码不能为空",
					rangelength: "长度只能是6~16个字符"	
				},
				newPwd : {
					required : "请输入新密码",
					rangelength: "长度只能是6~16个字符"
				},
				secondPwd : {
					required : "请输入新密码",
					rangelength: "长度只能是6~16个字符",
					equalTo : "两次输入的密码不一致"
				}
			},
			success : function(label) {
				label.html("验证成功").addClass("success");
			}
		});
	$('#oldPwd').poshytip({ 
	    className: 'tip-yellowsimple', 
	    showOn: 'focus', 
	    alignTo: 'target', 
	    alignX: 'right', 
	    alignY: 'center', 
	    offsetX: 5 
	});
	$('#newPwd').poshytip({ 
	    className: 'tip-yellowsimple', 
	    showOn: 'focus', 
	    alignTo: 'target', 
	    alignX: 'right', 
	    alignY: 'center', 
	    offsetX: 5 
	});
	$('#secondPwd').poshytip({ 
	    className: 'tip-yellowsimple', 
	    showOn: 'focus', 
	    alignTo: 'target', 
	    alignX: 'right', 
	    alignY: 'center', 
	    offsetX: 5 
	});
	</script>
</body>
</html>