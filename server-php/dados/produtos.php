<?php
/**
@author Rodrigo Portillo
@create_date 2018-04-05
**/
include("libs/security.php");


$sql = "SELECT nome_produto, valor_produto,(SELECT xnome FROM compras WHERE id = id_compra) as nome_loja,(SELECT tipo_pag FROM compras WHERE id = id_compra) as tipo_pag from compras_items WHERE valor_produto IS NOT NULL AND valor_produto <> '' ORDER BY id DESC LIMIT 10";

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