let array = new Array();
let i = 0;

do{
    array[i] = parseInt(prompt("Inserte un entero. Un número negativo para finalizar"));
    i++;
}while(array[i-1] > 0);


alert(array.sort());

//falta hacer que no se añada el numero negativo