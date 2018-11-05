<?php
namespace Home\Controller;
use Think\Controller;

class IndexController extends Controller {

	public function __construct() {
		parent::__construct();
		$keyword = clean(trim($_GET['keyword']));
		$plan = clean(trim($_GET['plan']));
		$unit = clean(trim($_GET['unit']));
		cookie('plan',$plan);
		cookie('unit',$unit);
		cookie('keyword',$keyword);
	}
 
    public function index(){
		$phone = M('info')->where("id = '1'")->getField('phone');
		$code = M('info')->where("id = '1'")->getField('code');
		$array = array(
			'phone' => $phone,
			'code' => htmlspecialchars_decode(html_entity_decode($code))
		);
	    $this->assign($array);
		$this->display('index');
    }
	
	public function fh(){
		$this->display('fh');
    }
	
	public function guest(){
        $this->display('guest');
    }
	
	public function add(){

    	load("@.clean");
    	load("@.check");
    	load("@.safe");
    	$name1 = clean(trim(I('post.name')));
		//留言者姓名
    	$name = $name1;
    	//手机
    	$mobile = clean(trim(I('post.mobile')));
    	//留言者地址
		  $content = clean(trim(I('post.content')));
    	$address = clean(trim(I('post.address')));
    	//留言者ip
    	$mip = $_SERVER["REMOTE_ADDR"];
	
		//标示
		$from = clean(trim(cookie('keyword')));
		$plan = clean(trim(cookie('plan')));
		$unit = clean(trim(cookie('unit')));
		$froms = 'plan='.$plan.'&unit='.$unit.'&keyword='.$from;
		if(empty($plan)){
			$plan = 'none';
		}
		if(empty($unit)){
			$unit = 'none';
		}
		if(empty($from)){
			$from = 'none';
		}
		//编辑日期
    	$updatetime = time();
    	//留言日期
    	$dateline = time();
    	$checkName = is_name($name1);
    	$checkMobile = is_mobile($mobile);
    	// if(!$checkName){
    	// 	echo "
			// <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
			// <script>alert('姓名为2~4个汉字');history.back(-1);</script>";
    	// }
    	// if(!$checkMobile){
    	// 	echo "
			// <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
			// <script>alert('请正确填写手机');history.back(-1);</script>";
    	// }

    	load("@.jm");
    	$mob = gbcrypt($mobile, 'ENCODE');
    	//$ema = gbcrypt($email, 'ENCODE');
		if($_POST['token'] !== session('token')){
    		echo "<script>alert('请不要重复提交');history.back(-1);</script>";
    	}
    	else{
    		if($_POST){
    			if($name1&&$mobile){
				    $con = mysql_connect('127.0.0.1','root','root');
					mysql_select_db('jiu',$con);
					mysql_query('set names utf8');
					$sql33 = "SELECT `create_time` FROM `guestbook` WHERE ( mip = '{$mip}' ) ORDER BY create_time desc LIMIT 1";
					$result = mysql_query($sql33,$con);
					$result1 = mysql_fetch_array($result);

    				if(time() - $result1['0'] < 3600){
    					echo "<script>alert('提交过于频繁，请稍后再试!');history.go(-1);</script>";
    				}
    				else{
						$con = mysql_connect('127.0.0.1','root','root');
						mysql_select_db('jiu',$con);
						mysql_query('set names utf8');
						$sql3 = "insert into guestbook(name,phone,address,content,is_read,diqu,create_time)  values('$name','$mobile','$address','$content','0','$froms','$dateline')";
						dump($sql3);die;
						$rs3 = mysql_query($sql3,$con);
						if($rs3){
							session('token',null);	
							echo "<script>alert('提交成功!');history.go(-1);</script>";	
						}else{
							echo "<script>alert('提交失败!');history.go(-1);</script>";
						}
    				}
    			}
    		}
    	}
    }
	
	
    
}