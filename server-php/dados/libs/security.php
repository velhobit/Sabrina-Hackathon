<?php
session_start();
include("connection.php");

function validateUser($user, $pass) {
	global $db;
	
	$sql = "SELECT 	usr_codigo
			FROM fr_usuario
			WHERE usr_login = '$user'
			AND usr_senha = MD5(CONCAT(CAST(usr_codigo AS varchar),'$pass')) LIMIT 1";
	try{
		$stmt = $db->prepare($sql);
		$stmt->execute();
    	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	}catch (PDOException $e){
		die('{"error" : "O identificador não existe ou não está escrito corretamente."}');
		//die($e->getMessage());
	}
	
	// Check Result
	if (count($result) < 1) {
		return false;
	} else {
		$_SESSION['user_id'] = $result[0]['usr_codigo'];
		return true;
	}
}
		

function protectPage() {
	global $db;
	
	if(!isset($_SESSION['user_id'])){
		killSession();
		return false;
	}
	
	$sql = "SELECT 	usr_codigo
			FROM fr_usuario
			WHERE usr_codigo = '" . 	
	$_SESSION['user_id'] . "' AND usr_on <> 'N' LIMIT 1";
	
	try{
		$stmt = $db->prepare($sql);
		$stmt->execute();
    	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	}catch (PDOException $e){
		die($e->getMessage());
	}
	
	// Check Result
	if (count($result) < 1) {
		return true;
	} else {
		killSession();
		return false;
	}
}


function killSession() {
	session_unset();
    session_destroy();
	die('{"error":"logout"}');
}
?>