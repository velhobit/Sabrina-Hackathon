<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Shopping Recife</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<link rel="stylesheet"  href="style.css"/>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
</head>

<body>
	<div class="header">
		<div class="cabecalho"><img src="assets/shopping-logo.png"/></div>
	</div>
	<div class="wrap">
		<div class="menu" id="menu">
			<ul>
				<li rel="dashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</li>
			
				<li rel="vendas"><i class="fab fa-sellsy"></i> Vendas</li>
				<li rel="campanhas"><i class="far fa-images"></i> Campanhas Direcionadas</li>
				<li rel="clube"><i class="fas fa-signal"></i> Estatísticas de Campanha</li>
			</ul>
		</div>
		<div class="paginas">
			<div class="dashboard pagina">
				<?php include ("dashboard.php"); ?>
			</div>
			<div class="relacionamento pagina">
				<?php include ("relacionamentos.php"); ?>
			</div>
			<div class="vendas pagina">
				<?php include ("vendas.php"); ?>
			</div>
			<div class="campanhas pagina">
				<?php include ("campanhas.php"); ?>
			</div>
			<div class="clube pagina">
				<?php include ("clube.php"); ?>
			</div>
		</div>
	</div>
	
	<script>
		$("#menu ul li").each(function(){
			
			var classe = $(this).attr("rel");
			$(this).click(function(){
				$(".paginas .pagina").hide();
				$(".paginas ." + classe).show();
			});
			
			
		});
	</script>
</body>
</html>