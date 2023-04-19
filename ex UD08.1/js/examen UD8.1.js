//EJERCICIO 1 RESUELTO POR MI

function pedirNombre(){
	let salir = false;
	let array = [];

	do{
		let nombre = prompt("Ingrese su nombre");
		if(isNaN(nombre)){
			array.push(nombre);
		}else{
			salir=true;
		}
	}while(!salir);

	return array;
}


//EJERCICIO 2 RESUELTO POR MI


function camelize(str){
	let arrayPalabras = str.split("-");
	for(let i = 1;i<arrayPalabras.length;i++){
		let primeraLetra = arrayPalabras[i].charAt(0).toUpperCase();
		arrayPalabras[i] = primeraLetra.concat(arrayPalabras[i].substring(1));
	}

	return arrayPalabras.join("");
}

//EJERCICIO 3 RESUELTO POR MI

function sortear(arr){
	let max = arr.length;
	let min = 0;
	let numAleatorio = Math.floor(Math.random() * (max - min) + min);

	return arr[numAleatorio];
}

//EJERCICIO 4 RESUELTO POR MI
function principal(){
	let nombres = pedirNombre();
	
	for(let i = 0;i<nombres.length;i++){
		nombres[i]=camelize(nombres[i]);
	}

	alert("El nombre escogido es: " +  sortear(nombres));
}

alert(principal());