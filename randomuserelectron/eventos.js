var muestraUsuario=function(){
	fetch('https://randomuser.me/api/')
	.then(datos=>datos.json())
	.then(datos=>{
	document.getElementById("txtNombre").innerHTML=datos.results[0].name.first
	document.getElementById("txtApellido").innerHTML=datos.results[0].name.last
	document.getElementById("txtGenero").innerHTML=datos.results[0].name.gender
	document.getElementById("txtCorreo").innerHTML=datos.results[0].name.email
	document.getElementById("foto").setAttribute('src',datos.results[0].picture.large)
	})
}

var btnUsuario= document.getElementById('btnUsuario');
btnUsuario.addEventListener('click',muestraUsuario)