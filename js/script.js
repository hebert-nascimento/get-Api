/*var config = { //VARIAVEL API
    user: "root",
    database: "getapi",
    password: "123456",
    host: "localhost", //NOME QUE APARECE ANTES DA INSTANCIA DO MEU SQL
    port: 3306, //PORTA PADRAO SQL SERVER
    dialect: 'mssql',
    max: 10000,
    idleTimeoutMillis: 3000,
    instanceName: 'MSSQLSERVERMARIA' //INSTANCIA DO MEU SQL SERVER
}; */

var btn = document.getElementById('#getApi');
var removerApi = document.getElementById('#RemoverApi');
var alertaBusca = document.getElementById('#alerta-Busca');

// ABRIR-API
btn.addEventListener('click', function(e){
	e.preventDefault();
	fetch('array.json')
	.then((res) => res.json())
	.then((data) => {
		var result = `<h2 class="mb-2">Resultado:</h2>`;
		data.forEach(function(user){
			result +=`
			<table class="table table-hover">
			<thead class="bg-info text-white">
			<tr>
			<th scope="col">*</th>
			<th scope="col">Nome:</th>
			<th scope="col">Sobrenome:</th>
			<th scope="col">Stream:</th>
			<th scope="col">Email:</th>
			<th scope="col">Opções:</th>
			</tr>
			</thead>
			<tbody class="table-active">
			<tr>
			<th scope="row"><strong> ${user.id} </strong></th>
			<td><strong> ${user.nome} </strong></td>
			<td><strong> ${user.sobrenome} </strong></td>
			<td><strong> ${user.stream} </strong></td>
			<td><strong> ${user.email} </strong></td>
			<td><button class="btn btn-outline-primary"><a href="${user.link}"> Acessar </a></button></td>
			</tr>
			</tbody>
			</table>
			`;
		})
		document.getElementById('result').innerHTML = result;
	})
	.catch((err) => console.log(err))
// MSG-ALERTA
alertaBusca.style.display = 'block';
setTimeout(function(){ 
	alertaBusca.style.display = 'none';
}, 4000);
})

// REMOVER-API
removerApi.addEventListener('click', function(e){
	e.preventDefault();
	result.style.display = 'none';
})