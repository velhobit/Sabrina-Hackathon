<h3>Campanhas</h3>
<div class="campanhas">
	<div class="campanha campanha1">
		<div class="card">
			<div class="img">
				<img src="assets/anuncio_nagem.jpg"/>
			</div>
			<h2>Promoção na Nagem</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a tortor ultricies, condimentum orci eget, vulputate diam. Morbi consequat odio eget sagittis aliquet.</p>
		</div>
		<div class="checks">
			<div>
				<input type="checkbox"/>
				<label>Todos</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Vestuário Feminino</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Vestuário Masculino</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Acessórios</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Cinema</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Alimentação</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Saúde</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Tecnologia</label>
			</div>
		</div>
		<div class="raio">
			<label>Raio</label>
			<input type="number" value="70" min="1" max="100"/>
			
		</div>
		<div class="desc">
				O raio é uma unidade de medida de relacionamento. Quanto maior o raio, mais refinado e especifica será a campanha. O raio vai de zero a cem.
			</div>
		<button id="enviarCampanha"><i class="fas fa-share-square"></i> Enviar</button>
	</div>
	
	<div class="campanha campanha2" style="margin-right: 15px;">
		<div class="card">
			<div class="img">
				<img src="assets/pontos.png"/>
			</div>
		</div>
		<div class="checks">
			<div>
				<input type="checkbox"/>
				<label>Todos</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Vestuário Feminino</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Vestuário Masculino</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Acessórios</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Cinema</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Alimentação</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Saúde</label>
			</div>
			<div>
				<input type="checkbox"/>
				<label>Tecnologia</label>
			</div>
		</div>
		<div class="raio">
			<label>Raio</label>
			<input type="number" value="70" min="1" max="100"/>
			
		</div>
		<div class="desc">
				O raio é uma unidade de medida de relacionamento. Quanto maior o raio, mais refinado e especifica será a campanha. O raio vai de zero a cem.
			</div>
		<button id="enviarCampanha2"><i class="fas fa-share-square"></i> Enviar</button>
	</div>
</div>

<script>
	$("#enviarCampanha").click(function(){
		alert("A campanha Promoção na Nagem vai começar a ser enviada em breve.");
		$(".campanha1").css("opacity","0.5");
		$.ajax({
			url: 'https://velhobit.com.br/shoppingrecife/dados/enviar_campanha.php?id=1',
			dataType: 'json',
			method: 'GET',
			success: function(resposta){
				console.log(resposta);
				
				
				//$(".campanha1").css("opacity","0.5");
			}
		});
	});
	
	$("#enviarCampanha2").click(function(){
		alert("A campanha Promoção na Nagem vai começar a ser enviada em breve.");
		$(".campanha2").css("opacity","0.5");
		$.ajax({
			url: 'https://velhobit.com.br/shoppingrecife/dados/enviar_campanha.php?id=2',
			dataType: 'json',
			method: 'GET',
			success: function(resposta){

				
			}
		});
	});
</script>