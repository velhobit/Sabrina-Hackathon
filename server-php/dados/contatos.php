<?php
/**
@author Rodrigo Portillo
@create_date 2018-04-05
**/
include("libs/security.php");
protectPage();

$postdata = file_get_contents("php://input");
if (isset($postdata)) {
	$request = json_decode($postdata, true);
}

if(isset($postdata) && isset($request['id'])){
	//Operações Contato Único
	include("classes/Contact.php");
	
	$contact = new Contact($request['id']);
	if(!isset($request['action'])){
		//Retorna Contato
		echo $contact->getJson();	
	}else{
		
		//Atualizar Contato
		if($request['action'] == 'update' || $request['action'] == 'create' ){

			$contact = new Contact($request['id']);

			if(isset($request['nome'])){
				$contact->setNome($request['nome']);
			}
			if(isset($request['funcao'])){
				$contact->setFuncao($request['funcao']);
			}
			if(isset($request['telefone'])){
				$contact->setTelefone($request['telefone']);
			}
			if(isset($request['celular'])){
				$contact->setCelular($request['celular']);
			}
			if(isset($request['celular2'])){
				$contact->setCelular2($request['celular2']);
			}
			if(isset($request['celular3'])){
				$contact->setCelular3($request['celular3']);
			}
			if(isset($request['email'])){
				$contact->setEmail($request['email']);
			}
			if(isset($request['email2'])){
				$contact->setEmail2($request['email2']);
			}
			if(isset($request['whatsapp'])){
				$contact->setWhatsapp($request['whatsapp']);
			}
			if(isset($request['skype'])){
				$contact->setSkype($request['skype']);
			}
			if(isset($request['facebook'])){
				$contact->setFacebook($request['facebook']);
			}
			if(isset($request['instagram'])){
				$contact->setInstagram($request['instagram']);
			}
			if(isset($request['linkedin'])){
				$contact->setLinkedin($request['linkedin']);
			}
			if(isset($request['twitter'])){
				$contact->setTwitter($request['twitter']);
			}
			if(isset($request['site'])){
				$contact->setSite($request['site']);
			}
			if(isset($request['endereco'])){
				$contact->setEndereco($request['endereco']);
			}
			if(isset($request['bairro'])){
				$contact->setBairro($request['bairro']);
			}
			if(isset($request['cidade'])){
				$contact->setCidade($request['cidade']);
			}
			if(isset($request['uf'])){
				$contact->setUF($request['uf']);
			}
			if(isset($request['cep'])){
				$contact->setCEP($request['cep']);
			}
			if(isset($request['nivel_decisao'])){
				$contact->setNivelDecisao($request['nivel_decisao']);
			}
			if(isset($request['periodicidade'])){
				$contact->setPeriodicidade($request['periodicidade']);
			}
			
			if($request['action'] == 'update'){
				echo $contact->update();
			}
		}else if($request['action'] == 'fav'){
			if($request['fav'] == 'on'){
				echo $contact->becomeFavorite();
			}else{
				echo $contact->removeFavorite();
			}
		}
	}
}else{
	//Todos os Contatos
	include("classes/Contacts.php");
	
	$contacts = new Contacts();
	
	if(isset($request['nome'])){
		$contacts->setNome($request['nome']);
	}
	if(isset($request['periodicidade'])){
		$contacts->setPeriodicidade($request['periodicidade']);
	}
	if(isset($request['empresa'])){
		$contacts->setEmpresa($request['empresa']);
	}
	if(isset($request['nivel_decisao'])){
		$contacts->setNivelDecisao($request['nivel_decisao']);
	}
	if(isset($request['cidade'])){
		$contacts->setCidade($request['cidade']);
	}
	if(isset($request['representante'])){
		$contacts->setRepresentante($request['representante']);
	}
	if(isset($request['estado'])){
		$contacts->setEstado($request['estado']);
	}
	if(isset($request['favorito'])){
		$contacts->setFavorito($request['favorito']);
	}

	echo $contacts->getJson();
}
?>