<?php
/**
@author Rodrigo Portillo
@create_date 2018-04-05
**/
include("config.php");
$db = false;
try{
	$db = new PDO("mysql:dbname=$dbname;host=$host", $dbuser, $dbpass);
	
	if(!$db){
 		die('{"error": "Erro ao conectar ao banco de dados. Verifique se entrou com o nome correto da empresa."}');
 	}
	


}catch (PDOException $e){
	// report error message
	die($e->getMessage());
	//die('{"error" : "O identificador ('. $_SESSION['enterprise'] . session_id() .') não existe ou não está escrito corretamente."}');
}
?>