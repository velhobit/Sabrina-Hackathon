<?php
/**
@author Rodrigo Portillo
@create_date 2018-04-05
**/
include("libs/security.php");


$sql = "SELECT (SELECT c.nome FROM clientes c WHERE cliente = c.id) as nome_cliente, valor_total,tipo_pag,xnome as nome_loja from compras WHERE valor_total IS NOT NULL AND valor_total <> '' GROUP BY nome_cliente, tipo_pag, xnome ORDER BY id DESC";

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