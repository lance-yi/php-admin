<?php

namespace Admin\Model;
use Think\Model;
class UserModel extends Model {
	
	protected $connection = array(
		'db_type'  => 'mysql',
		'db_user'  => 'master',
		'db_pwd'   => 'master@3306',
		'db_host'  => '127.0.0.1',
		'db_port'  => '3306',
		'db_name'  => 'jiu',
		'DB_CHARSET'=> 'utf8'
	);
	
	public function login($user,$pwd){
		if(empty($user)){
			return false;
		}else{
			$result = $this->query("select name, password from user where name ='{$user}' and password = '{$pwd}'");
			return $result;
		}
	}
	

	
}