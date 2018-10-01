<?php
class Contacts{
	private $data;
	
	private $name = false;
	private $role = false;
	private $group = false;
	private $period = false;
	private $company = false;
	private $search_c = false;
	private $agent = false;
	private $city = false;
	private $state = false;
	private $levelDecision = false;
	private $favorito = false;
	
	function __construct(){
		
	}

	function executeQuery(){
		global $db;
		$db->exec("SET CLIENT_ENCODING TO 'UTF8';");
		
		$sql = "SELECT 	cliente.pessoa_foto AS logo,
						encode(contatos.foto, 'base64') AS foto,
						encode(cliente.pessoa_foto, 'base64') as logo,
						contatos.tratamento,
						contatos.nome_pessoa AS nome,
						contatos.funcao,
						cliente.pessoa_telefone AS telefone_com,
						contatos.telefone,
						contatos.celular1,
						contatos.celular2,
						contatos.celular3,
						contatos.email1,
						contatos.email2,
						contatos.skype,
						contatos.whatsapp,
						contatos.facebook,
						contatos.instagram,
						contatos.linkedin,
						contatos.twitter,
						contatos.site,
						cliente.pessoa_razaosocial,
						cliente.repres_nomeabrev,
						contatos.endereco,
						contatos.bairro,
						contatos.cidade,
						contatos.uf,
						contatos.cep,
						contatos.nivel_decisao,
						grupo_contatos.descricao AS grupo,
						contatos.perioticidade,
						contatos.id,
						contatos.favorito,
						pedidos.qtd_ped,
						compras.qtd_compra,
						atendimentos.qtd_atendimento,
						nfse.qtd_nfse,
						repres.pessoa_razaosocial as repres_nome,
						cliente.pessoa_end as cli_end,
						cliente.pessoa_nr as cli_nr,
						cliente.pessoa_comp as cli_comp,
						cliente.pessoa_bairro as cli_bairro,
						cliente.cidade_cidade as cli_cidade,
						cliente.uf_uf as cli_uf,
						cliente.pessoa_cep as cli_cep,
						cliente.pessoa_telefone as cli_telefone,
						concat(cliente.pessoa_razaosocial,' ', contatos.funcao,' ', contatos.endereco, ' ',contatos.bairro, ' ', cliente.pessoa_bairro, ' ',contatos.cidade, ' ', cliente.cidade_cidade, ' ',  cliente.uf_uf, ' ', contatos.uf, ' ', contatos.nome_pessoa,' ' ,cliente.repres_nomeabrev) as search_c
				FROM contatos
				LEFT JOIN cliente
				ON (contatos.estab_cod = cliente.estab_cod)
				AND
				(contatos.id_cliente = cliente._seq_)
				LEFT JOIN repres
				ON cliente.estab_cod = repres.estab_cod AND 
				cliente.repres_nomeabrev = repres.repres_nomeabrev
				LEFT JOIN grupo_contatos ON (grupo_contatos.id = contatos.grupo)
				LEFT JOIN (SELECT count(*) AS qtd_ped, pedido_venda.estab_cod, pedido_venda.cliente_nomeabrev
				FROM pedido_venda
				GROUP BY pedido_venda.estab_cod, pedido_venda.cliente_nomeabrev) pedidos
				ON (cliente.estab_cod = pedidos.estab_cod)
				AND (cliente.cliente_nomeabrev=pedidos.cliente_nomeabrev)
				LEFT JOIN 
				(SELECT count(*) AS qtd_compra,
									doc_entrada.estab_cod,
									doc_entrada.pessoa_cpfcnpj
				FROM doc_entrada
				GROUP BY doc_entrada.estab_cod, doc_entrada.pessoa_cpfcnpj) compras
				ON (cliente.estab_cod = compras.estab_cod)
				AND (cliente.pessoa_cpfcnpj=compras.pessoa_cpfcnpj)
				LEFT JOIN
				(SELECT count(*) AS qtd_atendimento,
									atendimento.estab_cod,
									atendimento.idcontato
				FROM atendimento
				GROUP BY atendimento.estab_cod, atendimento.idcontato) atendimentos
				ON (atendimentos.estab_cod = contatos.estab_cod)
				AND (atendimentos.idcontato=contatos.id)
				LEFT JOIN (
				SELECT count(*) AS qtd_nfse, mov_nfse.estab_cod, mov_nfse.idcontato
				FROM mov_nfse
				GROUP BY mov_nfse.estab_cod, mov_nfse.idcontato) nfse
				ON (nfse.estab_cod = contatos.estab_cod)
				AND (nfse.idcontato=contatos.id)
				WHERE coalesce(contatos.nome_pessoa,'') <> ''";
		
		if($this->agent){
			$sql .= " AND repres.pessoa_razaosocial = '" . $this->agent . "'";
		}
		if($this->city){
			$sql .= " AND (UPPER(contatos.cidade) = '" . strtoupper($this->city) . "' OR UPPER(cliente.cidade_cidade) = '" . strtoupper($this->city) . "')";
		}
		if($this->state){
			$sql .= " AND (contatos.uf = '" . $this->state . "' OR cliente.uf_uf = '" . $this->state . "') ";
		}
		if($this->levelDecision){
			$sql .= " AND contatos.nivel_decisao = '" . $this->levelDecision . "'";
		}
		if($this->company){
			$sql .= " AND cliente.pessoa_razaosocial = '" . $this->company . "'";
		}
		if($this->period){
			$sql .= " AND contatos.perioticidade = '" . $this->period . "'";
		}
		if($this->group){
			$sql .= " AND grupo_contatos.descricao = '" . $this->group . "'";
		}
		if($this->name){
			$sql .= " AND cliente.pessoa_razaosocial LIKE '%" . $this->name . "%'";
		}
		if($this->favorito){
			$sql .= " AND contatos.favorito = '". $this->favorito . "'";
		}
		
		$sql .= " ORDER BY contatos.nome_pessoa ASC";
		
		//echo $sql;
		
		try{
			$stmt = $db->prepare($sql);
			$stmt->execute();
			$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		}catch (PDOException $e){
			die($e->getMessage());
		}

		// Check Result
		if (count($result) < 1) {
			return false;
		} else {
			$this->data = array_map(function($value){
				return array_map("html_entity_decode", $value );
			}, $result );
		
			$this->name = $result['nome'];
			$this->role = $result['contatos.funcao'];
			$this->company = $result['repres_nome'];
			$this->search_c = $result['search_c'];
			
			return true;
		}
	}
	
	function getJson(){
		$this->executeQuery();
		if($this->data == NULL || $this->data == "NULL"){
			return "{\"error\": \"Não há dados. Tente realizar outra pesquisa.\"}";
		}else{
			return json_encode($this->data, JSON_PRETTY_PRINT);
		}
	}
	
	function setRepresentante($agent){
		$this->agent = $agent;
	}
	function setCidade($city){
		$this->city = $city;
	}
	function setNivelDecisao($levelDecision){
		$this->levelDecision = $levelDecision;
	}
	function setEmpresa($company){
		$this->company = $company;
	}
	function setPeriodicidade($period){
		$this->period = $period;
	}
	function setGroup($group){
		$this->group = $group;
	}
	function setNome($name){
		$this->name = $name;
	}
	function setEstado($state){
		$this->state = $state;
	}
	function setFavorito($favorito){
		$this->favorito = $favorito;
	}
}
?>