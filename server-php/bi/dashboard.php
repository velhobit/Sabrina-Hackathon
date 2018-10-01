
<script type="text/javascript">

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Topping');
	data.addColumn('number', 'Slices');
	data.addRows([
	  ['Vestuário Feminino', 3],
          ['Cinema', 1],
          ['Vestuário Masculino', 1],
          ['Acessórios', 1],
          ['Outros', 2]
	]);

	// Set chart options
	var options = {};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('vendas'));
	chart.draw(data, options);
  }
</script>
<script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Dias', 'Setembro', 'Outubro'],
          ['01',  1000,      400],
          ['02',  1170,      460],
          ['03',  660,       1120],
          ['04',  1030,      540]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('engajamento'));

        chart.draw(data, options);
      }
    </script>
<script type="text/javascript">
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', ''],
          ['Vestuário Feminino',     111575.50],
          ['Cinema',      71205.00],
          ['Vestuário Masculino',  31254.00],
          ['Estacionamento', 28970.00],
          ['Outros',    10218.00]
        ]);

        var options = {
          title: 'Valores em R$',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('consumo'));
        chart.draw(data, options);
      }
    </script>

<script>
	google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTitleSubtitle);

function drawTitleSubtitle() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Meses');
      data.addColumn('number', 'Faturamento');

      data.addRows([
        ['Setembro', 750254.00],
        ['Outubro', 128692.00],
      ]);

      var options = {
        chart: {
          title: '*Faturamento em R$',
          subtitle: 'Considerado apenas dos dados de telemetria'
        },
        hAxis: {
          title: 'Time of Day',
          viewWindow: {
            min: [7, 30, 0],
            max: [7, 750254, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var materialChart = new google.charts.Bar(document.getElementById('compras'));
      materialChart.draw(data, options);
    }
</script>
<div class="cards">
	<div class="card">
		<div class="grafico" id="engajamento"></div>
		<h2>Engajamento*</h2>
		<center><small>*Em relação ao mês anterior</small></center>
	</div>
	<div class="card">
		<div class="grafico" id="vendas"></div>
		<h2>Vendas por categorias</h2>
	</div>
	<div class="card">
		<div class="grafico" id="consumo"></div>
		<h2>Consumo</h2>
	</div>
	<div class="card">
		<div class="grafico" id="compras"></div>
		<h2>Faturamento*</h2>
		<center><small>*Em relação ao mês anterior</small></center>
	</div>
</div>