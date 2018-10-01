<div class="area_vendas">
	<table id="ultimas_vendas">
		<caption>Últimas Vendas</caption>
		<thead>
			<tr>
				<th>Nome</th>
				<th>Local</th>
				<th>Forma de Pagamento</th>
				<th>Valor</th>
			</tr>
		</thead>
		<tbody>
			
		</tbody>
	</table>
	
	<table id="ultimos_produtos" style="margin-top: 20px;">
		<caption>Últimos Produtos Vendidos</caption>
		<thead>
			<tr>
				<th>Nome</th>
				<th>Local</th>
				<th>Forma de Pagamento</th>
				<th>Valor</th>
			</tr>
		</thead>
		<tbody>
			
		</tbody>
	</table>
</div>

<script>
	function carregarTabelaVendas(){
		$.ajax({
				url: 'https://velhobit.com.br/shoppingrecife/dados/vendas.php',
				dataType: 'json',
				success: function(resposta){
					console.log(resposta);
					if(resposta.length > 1){
						var linhas = "";
						var item = "";
						for(var i =0; i < resposta.length; i++){
							item = resposta[i];
							console.log(item);
							linhas += "<tr>";
							linhas += "<td>" + item['nome_cliente'].split(" ")[0] + " **** ******* ***</td>";
							linhas += "<td>" + item['nome_loja'] + "</td>";
							linhas += "<td>" + getFormaPagamento(item['tipo_pag']) + "</td>";
							linhas += "<td>" + paraReal(item['valor_total']) + "</td>";	
							linhas += "<tr/>";
						}
						$("#ultimas_vendas tbody").html(linhas);
					}
				}
			});
	}
	
	function carregarTabelaProdutos(){
		$.ajax({
				url: 'https://velhobit.com.br/shoppingrecife/dados/produtos.php',
				dataType: 'json',
				success: function(resposta){
					console.log(resposta);
					if(resposta.length > 1){
						var linhas = "";
						var item = "";
						for(var i =0; i < resposta.length; i++){
							item = resposta[i];
							console.log(item);
							linhas += "<tr>";
							linhas += "<td>" + item['nome_produto'] + "</td>";
							linhas += "<td>" + item['nome_loja'] + "</td>";
							linhas += "<td>" + getFormaPagamento(item['tipo_pag']) + "</td>";
							linhas += "<td>" + paraReal(item['valor_produto']) + "</td>";	
							linhas += "<tr/>";
						}
						$("#ultimos_produtos tbody").html(linhas);
					}
				}
			});
	}
	
	function getFormaPagamento(n){
		n = parseInt(n);
		if(n == 1){
			return "Dinheiro";   
	   	}
		if(n == 2){
			return "Cheque";   
	   	}
		if(n == 3){
			return "Cartão de Crédito";   
	   	}
		if(n == 4){
			return "Cartão de Débito";   
	   	}
		if(n == 5){
			return "Crédito Loja";   
	   	}
		if(n == 6){
			return "Dinheiro";   
	   	}
		if(n == 7){
			return "Dinheiro";   
	   	}
		if(n == 8){
			return "Dinheiro";   
	   	}
		if(n == 9){
			return "Dinheiro";   
	   	}
		if(n == 10){
			return "Vale Alimentação";   
	   	}
		if(n == 11){
			return "Vale Refeição";   
	   	}
		if(n == 12){
			return "Vale Presente";   
	   	}
		if(n == 13){
			return "Vale Combustível";   
	   	}
		if(n == 15){
			return "Boleto Bancário";   
	   	}
		if(n == 90){
			return "Sem Pagamento";   
	   	}
		if(n == 99){
			return "Outros";   
	   	}
	}
	
	function paraReal(valor){
		return "R$ " + valor.replace(".",",");
	}
	
	carregarTabelaVendas();
	carregarTabelaProdutos();
	
	setInterval(function(){
		carregarTabelaVendas();
		carregarTabelaProdutos();
	},10000);
</script>