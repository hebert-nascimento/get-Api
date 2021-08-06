<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
	<link rel="stylesheet" href="css/font-awesome.min.css" />
	<link rel="stylesheet" href="css/style.css" />
	<title>Api</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">
				<form action="" class="form-group">
					<button class="btn btn-primary" id="#getApi">Abrir Api</button>
					<button class="btn btn-danger" id="#RemoverApi">Remover Api</button>
				</form>
			</div>
			<div class="col-4">
				<div class="alert alert-success alerta" role="" id="#alerta-Busca">
					<i class="fa fa-exclamation-circle"></i>
					<span style="float: right; cursor: pointer;"><strong>X</strong></span>
				</div>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-12">
				<div id="result" class="AnimacaoApi"></div>
			</div>
		</div>
	</div>
	
	<script type="text/javascript" src="js/script.js"></script>
</body>
</html>