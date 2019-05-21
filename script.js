/*
1. Desarrolla una calculadora de propinas usando Javascript, HTML y CSS;  En el formulario se deben considerar los siguiente valores: 
Primero el valor de la cuenta a pagar.
Segundo el porcentaje de propina que se quiera dar.
Cantidad de personas en las que se divide la cuenta.
Al ingresar los tres valores y dar click en el botón “calcular”, debe mostrar el valor de propina total y el valor por individual por persona. 
*/



function esNumeroCuenta(){
	var bool = isNaN(document.getElementsByName("cuenta")[0].value);
	var cant = document.getElementsByName("cuenta")[0].value;
	//alert(bool);
	if((bool==false) && (cant>0)){
		//correcto
		document.getElementById("mensaje_cuenta").innerHTML = "";
		return true;
	}else{
		document.getElementById("mensaje_cuenta").innerHTML = "Por favor ingresa un número correcto";
		document.getElementsByName("cuenta")[0].value="";
		return false;
	}
}

function esNumeroPropina(){
	var bool = isNaN(document.getElementsByName("propina")[0].value);
	//alert(bool);
	if(bool==false){
		//correcto
		document.getElementById("mensaje_propina").innerHTML = "";
		return true;
	}else{
		document.getElementById("mensaje_propina").innerHTML = "Por favor ingresa un porcentaje correcto";
		document.getElementsByName("propina")[0].value="";
		return false;
	}
}

function propinaMayor100(){
	var pro = document.getElementsByName("propina")[0].value;
	//var prop = parseFloat(pro);
	if(pro<1 || pro>100){
		document.getElementById("mensaje_error_propina").innerHTML = "Debe ingresar un porcentaje mayor a 1 y menor a 100 del valor a cancelar en la cuenta";
		document.getElementsByName("propina")[0].value="";
		return false;
	}else{
		document.getElementById("mensaje_error_propina").innerHTML = "";
		return true;
	}
}

function calcular(){
	if(esNumeroCuenta()&&esNumeroPropina()&&propinaMayor100()){
		var cuenta = document.getElementsByName("cuenta")[0].value;
		var porcentaje = document.getElementsByName("propina")[0].value;
		var cantidad = document.getElementsByName("cantidad")[0].value;

		//alert("cuenta: "+cuenta+"\n"+"porcentaje: "+porcentaje+"\n"+"cantidad de personas: "+cantidad);
		var propinaCant = cuenta*(porcentaje/100);
		//alert("antes: "+cuenta);
		var total = cuenta*1.0;
		total = total + propinaCant;
		//alert("total: "+total);
		var cantPersona = propinaCant/cantidad;
		alert("El total de propina a cancelar es de: $"+propinaCant+"\n"+"La propina a cancelar por persona es de: $"+cantPersona+"\n"+"El monto total a cancelar es de: $"+total);
	}else{
		alert("Por favor completar todos los campos correctamente");
	}
}

/*function calcular(){
		var cuenta = document.getElementsByName("cuenta")[0].value;
		var porcentaje = document.getElementsByName("propina")[0].value;
		var cantidad = document.getElementsByName("cantidad")[0].value;

		//alert("cuenta: "+cuenta+"\n"+"porcentaje: "+porcentaje+"\n"+"cantidad de personas: "+cantidad);
		var propinaCant = cuenta*(porcentaje/100);
		//alert("antes: "+cuenta);
		var total = cuenta*1.0;
		total = total + propinaCant;
		//alert("total: "+total);
		var cantPersona = propinaCant/cantidad;

		alert("El total de propina a cancelar es de: $"+propinaCant+"\n"+"La propina a cancelar por persona es de: $"+cantPersona+"\n"+"El monto total a cancelar es de: $"+total);

}*/

//Verificar que no sea letra, 