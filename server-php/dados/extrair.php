<?php

//Garantir que seja lido sem problemas
include("libs/connection.php");

//$urlMessage = "http://nfce.sefaz.pe.gov.br/nfce-web/consultarNFCe?chNFe=26180810798601000498650010000036201530994028&nVersao=100&tpAmb=1&dhEmi=323031382D30382D32315431373A35323A31352D30333A3030&vNF=49.90&vICMS=0.00&digVal=7A747A5869654D414B656131326A68714F78507664796354706A343D&cIdToken=000002&cHashQRCode=5FC9E4EDFCD3CAD7E6BA0FF68F435D896C75B131";

$postdata = file_get_contents("php://input");

if (isset($postdata)) {
	$request = json_decode($postdata);
	$urlMessage = $request->url;
	$urlMessage = trim($urlMessage);
}

$ch = curl_init();
//Selecionando URL
curl_setopt($ch, CURLOPT_URL, $urlMessage);
//O cabeçalho é importante para definir tipo de arquivo enviado
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Encoding: gzip, deflate',
    'Accept-Language: en-US,en;q=0.5',
    'Connection: keep-alive',
    'SomeBull: BeingIgnored',
    'User-Agent: Mozilla/5.0 (Windows NT 5.1; rv:16.0) Gecko/20100101 Firefox/16.0'
  ));
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

$doc = new DOMDocument();

if (@$doc->loadXML($retorno) === false){
	die('{"erro": "A NFCe não está acessível. Verifique se ela não foi emitida em contingência / homologação, ou tente novamente mais tarde."}');
}

$produtos = $doc->getElementsByTagName("prod");

function xmlToArray($xml, $options = array()) {
    $defaults = array(
        'namespaceSeparator' => ':', // você pode querer que isso seja algo diferente de um cólon
        'attributePrefix' => '@',    // para distinguir entre os nós e os atributos com o mesmo nome
        'alwaysArray' => array(),    // array de tags que devem sempre ser array
        'autoArray' => true,         // só criar arrays para as tags que aparecem mais de uma vez
        'textContent' => '$',        // chave utilizada para o conteúdo do texto de elementos
        'autoText' => true,          // pular chave "textContent" se o nó não tem atributos ou nós filho
        'keySearch' => false,        // pesquisa opcional e substituir na tag e nomes de atributos
        'keyReplace' => false        // substituir valores por valores acima de busca
    );
    $options = array_merge($defaults, $options);
    $namespaces = $xml->getDocNamespaces();
    $namespaces[''] = null; // adiciona namespace base(vazio) 

    // Obtém os atributos de todos os namespaces
    $attributesArray = array();
    foreach ($namespaces as $prefix => $namespace) {
        foreach ($xml->attributes($namespace) as $attributeName => $attribute) {
            // Substituir caracteres no nome do atributo
            if ($options['keySearch']) $attributeName =
                    str_replace($options['keySearch'], $options['keyReplace'], $attributeName);
            $attributeKey = $options['attributePrefix']
                    . ($prefix ? $prefix . $options['namespaceSeparator'] : '')
                    . $attributeName;
            $attributesArray[$attributeKey] = (string)$attribute;
        }
    }

    // Obtém nós filhos de todos os namespaces
    $tagsArray = array();
    foreach ($namespaces as $prefix => $namespace) {
        foreach ($xml->children($namespace) as $childXml) {
            // Recursividade em nós filho
            $childArray = xmlToArray($childXml, $options);
            list($childTagName, $childProperties) = each($childArray);

            // Substituir caracteres no nome da tag
            if ($options['keySearch']) $childTagName =
                    str_replace($options['keySearch'], $options['keyReplace'], $childTagName);
            // Adiciona um prefixo namespace, se houver
            if ($prefix) $childTagName = $prefix . $options['namespaceSeparator'] . $childTagName;

            if (!isset($tagsArray[$childTagName])) {
                // Só entra com esta chave
                // Testa se as tags deste tipo deve ser sempre matrizes, não importa a contagem de elementos
                $tagsArray[$childTagName] =
                        in_array($childTagName, $options['alwaysArray']) || !$options['autoArray']
                        ? array($childProperties) : $childProperties;
            } elseif (
                is_array($tagsArray[$childTagName]) && array_keys($tagsArray[$childTagName])
                === range(0, count($tagsArray[$childTagName]) - 1)
            ) {
                $tagsArray[$childTagName][] = $childProperties;
            } else {
                $tagsArray[$childTagName] = array($tagsArray[$childTagName], $childProperties);
            }
        }
    }

    // Obtém o texto do nó
    $textContentArray = array();
    $plainText = trim((string)$xml);
    if ($plainText !== '') $textContentArray[$options['textContent']] = $plainText;

    $propertiesArray = !$options['autoText'] || $attributesArray || $tagsArray || ($plainText === '')
            ? array_merge($attributesArray, $tagsArray, $textContentArray) : $plainText;

    // Retorna o nó como array
    return array(
        $xml->getName() => $propertiesArray
    );
}

$xml = simplexml_load_string($retorno);
$arrayData = xmlToArray($xml);


//Tratar
$chave_nfce = $arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['@Id'];
$produtos = $arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['det'];


if(isset($arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['pag']['detPag']['tPag'])){
	$formaPagamento = $arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['pag']['detPag']['tPag'];
}else{
	$formaPagamento = $arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['pag']['tPag'];
}
if(isset($arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['pag']['detPag']['vPag'])){
	$total = $arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['pag']['detPag']['vPag'];
}else{
	$total = $arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['pag']['vPag'];
}

$local_cnpj = $arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['emit']['CNPJ'];
$local = $arrayData['nfeProc']['proc']['nfeProc']['NFe']['infNFe']['emit']['xNome'];

$id_cliente = '1';

$sql = "INSERT INTO compras (id, cliente, tipo_pag, valor_total, url_nota, chave_nfce, cnpj_loja, xnome) VALUES (DEFAULT, :cliente, :tipo_pag, :valor_total, :url_nota, :chave_nfce, :cnpj_loja, :xnome);";

try{
	$stmt = $db->prepare($sql);
	
	$stmt->bindParam(':cliente', $id_cliente);
	$stmt->bindParam(':tipo_pag', $formaPagamento);
	$stmt->bindParam(':valor_total', $total);
	$stmt->bindParam(':url_nota', $urlMessage);
	$stmt->bindParam(':chave_nfce', $chave_nfce);
	$stmt->bindParam(':cnpj_loja', $local_cnpj);
	$stmt->bindParam(':xnome', $local);
	
	$stmt->execute();
	
	$id_compra = $db->lastInsertId();
}catch (PDOException $e){
	die($e->getMessage());
}

try{

foreach ($produtos as $key => $det) {
	if(isset($det['prod'])){
		$produto = $det["prod"];
	}else{
		//sprint_r($det);
	}
    $sql = "INSERT INTO compras_items (id, id_compra, id_cliente, nome_produto, valor_produto, quantidade) VALUES (DEFAULT, :id_compra, :id_cliente, :nome_produto, :valor_produto, :quantidade)";
	
	$stmt = $db->prepare($sql);

	$stmt->bindParam(':id_cliente', $id_cliente);
	$stmt->bindParam(':id_compra', $id_compra);
	$stmt->bindParam(':nome_produto', $produto['xProd']);
	$stmt->bindParam(':valor_produto', $produto['vProd']);
	$stmt->bindParam(':quantidade', $produto['qCom']);
	
	$stmt->execute();
}
} catch(Exception $e){

	$produto = $det["prod"];
    $sql = "INSERT INTO compras_items (id, id_compra, id_cliente, nome_produto, valor_produto, quantidade) VALUES (DEFAULT, :id_compra, :id_cliente, :nome_produto, :valor_produto, :quantidade)";
	
	$stmt = $db->prepare($sql);

	$stmt->bindParam(':id_cliente', $id_cliente);
	$stmt->bindParam(':id_compra', $id_compra);
	$stmt->bindParam(':nome_produto', $produto['xProd']);
	$stmt->bindParam(':valor_produto', $produto['vProd']);
	$stmt->bindParam(':quantidade', $produto['qCom']);
	
	$stmt->execute();
}

if($total > 50){
	$pontos = "500";
}else{
	$pontos = "100";
}
echo '{"mensagem": "Você cadastrou uma compra no valor de R$' . number_format($total,2,',','.') . ' feita em ' . $local . '", "pontos" : "' . $pontos . '"}';