let num = prompt("Ingrese un numero");
let result = 1;

for (let i = num; i > 0; i--) {
    result*=i;
}

alert("El factorial de "+ num +" es: "+result);