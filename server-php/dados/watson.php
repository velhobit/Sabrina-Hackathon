<?php

//Garantir que seja lido sem problemas
include("libs/connection.php");

//Worskspace
$workspace = "858e9ae3-fed7-4cbb-8206-49167447a933"; // Digite a chave do Workspace
//Dados de Login
$username = "d237c1de-c3f0-4200-8a31-86d4285f5f44"; //Usuário
$password = "azHVqmhOg6Bq"; //Senha
//Capturar Texto
//Use $_POST em produção, por segurança

//Capturar dados do Mobile
$postdata = file_get_contents("php://input");
$texto = "Oi";
$identificador = md5(uniqid(rand(), true));
if (isset($postdata)) {
	$request = json_decode($postdata);
	$texto = $request->texto;
}

if(isset($request->identificador)){
	$identificador = $request->identificador;
}
//URL da API
//(deve ser passado o método e a versão da API em GET)
$url = "https://gateway.watsonplatform.net/conversation/api/v1/workspaces/" . $workspace;
$urlMessage = $url . "/message?version=2018-09-20";
//Dados (montar Json)
$dados  = "{";
$dados .= "\"input\": ";
$dados .= "{\"text\": \"" . $texto . "\"},";
$dados .= "\"context\": {\"conversation_id\": \"" . $identificador . "\",";
$dados .= "\"system\": {\"dialog_stack\":[{\"dialog_node\":\"root\"}], \"dialog_turn_counter\": 1, \"dialog_request_counter\": 1}}";
$dados .= "}";
//Cabeçalho que leva tipo de Dados
$headers = array('Content-Type:application/json');
//Iniciando Comunicação cURL
$ch = curl_init();
//Selecionando URL
curl_setopt($ch, CURLOPT_URL, $urlMessage);
//O cabeçalho é importante para definir tipo de arquivo enviado
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
//Habilitar método POST
curl_setopt($ch, CURLOPT_POST, 1);
//Enviar os dados
curl_setopt($ch, CURLOPT_POSTFIELDS, $dados);
//Capturar Retorno
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//Autenticação
curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
//Executar
$retorno = curl_exec($ch);
//Fechar Conexão
curl_close($ch);
//Imprimir com leitura fácil para humanos
$retorno = json_decode($retorno);
echo json_encode($retorno, JSON_PRETTY_PRINT);