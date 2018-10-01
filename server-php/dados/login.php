<?php
/**
@author Rodrigo Portillo
@create_date 2018-04-05
**/
session_start();

$postdata = file_get_contents("php://input");
if (isset($postdata)) {
	$request = json_decode($postdata);
	$user = $request->user;
	$pass = $request->pass;
	$enterprise = $request->enterprise;
}

if(!empty($enterprise)){
	if($enterprise === "saemp"){
		$_SESSION['enterprise'] = $enterprise;	
	}else{
		$_SESSION['enterprise'] = "saemp_" . strtolower($enterprise);
	}
}else{
	die('{"error":"Você precisa digitar o ALIAS de uma empresa"}');
}

include("libs/security.php");

if(isset($user) && isset($pass)){
	$user = $user;
	$pass = $pass;

	if(validateUser($user, $pass)){
		echo ('{"message":"success", "user_id": ' . $_SESSION['user_id'] . ', "alias" : "' . $_SESSION['enterprise'] . '"}');
	}else{
		echo ('{"error":"Nome de Usuário e Senha não combinam"}');
	}
} else {
	die('{"error":"Não foi passado login ou senha"}');
}
?>