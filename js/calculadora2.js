window.onload = function(){
	var operador = "";
	var operando1 = document.getElementById("operando1");
	var operando2 = document.getElementById("operando2");

	
	var numeros = function(){
		var valor = this.value;
		if (operador == "") { //Operando1
			if (operando1.value == "0") {
				operando1.value = "";
			}
			operando1.value += valor;
		}else{ //operando2
			if (operando2.value == "0") {
				operando2.value = "";
			}
			operando2.value += valor;
		}
	}

	var cero = document.getElementById("cero");
	cero.addEventListener("click",numeros);

	var uno = document.getElementById("uno");
	uno.addEventListener("click",numeros);

	var dos = document.getElementById("dos");
	dos.addEventListener("click",numeros);

	var tres = document.getElementById("tres");
	tres.addEventListener("click",numeros);

	var cuatro = document.getElementById("cuatro");
	cuatro.addEventListener("click",numeros);

	var cinco = document.getElementById("cinco");
	cinco.addEventListener("click",numeros);

	var seis = document.getElementById("seis");
	seis.addEventListener("click",numeros);

	var siete = document.getElementById("siete");
	siete.addEventListener("click",numeros);

	var ocho = document.getElementById("ocho");
	ocho.addEventListener("click",numeros);

	var nueve = document.getElementById("nueve");
	nueve.addEventListener("click",numeros);

	var suma=document.getElementById("suma");
	var resta=document.getElementById("resta");
	var multiplicacion=document.getElementById("multiplicacion");
	var division=document.getElementById("division");
	var igual=document.getElementById("igual");



	var colorAmarillo = function(){
		this.style.background = "yellow";
	}
	var colorBlanco = function(){
		this.style.background = "white";
	}

	operando1.addEventListener("focus",colorAmarillo);
	operando1.addEventListener("focusout",colorBlanco);	
	operando2.addEventListener("focus",colorAmarillo);
	operando2.addEventListener("focusout",colorBlanco);	
	resultado.addEventListener("focus",colorAmarillo);
	resultado.addEventListener("focusout",colorBlanco);	

}