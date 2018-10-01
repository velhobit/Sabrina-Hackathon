<?php

require("libs/connection.php");
$sql = "SELECT *, (SELECT a.titulo FROM categories a WHERE a.id = postcards.sub_categoria) as category_name FROM postcards;";

try{
	$stmt = $db->prepare($sql);
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

	$result = array_map(function($value){
		return array_map("utf8_encode", $value );
	}, $result );

	
	if($result == NULL || $result == "NULL"){
		echo "{\"error\": \"Não há dados. Tente realizar outra pesquisa.\"}";
	}else{
		echo json_encode($result, JSON_PRETTY_PRINT);
	}
}catch (PDOException $e){
	die($e->getMessage());
}
?>