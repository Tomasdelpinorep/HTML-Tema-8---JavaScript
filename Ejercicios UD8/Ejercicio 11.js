tam = prompt("Indique el tamaño del array:");
let array = new Array(tam);

for (let i = 0; i < tam; i++) {
    array[i] = prompt("Ingrese el elemento " + (i + 1));
}

function suma(array){
    let total=0;

    for(let i = 0; i < array.length; i++){
        total += parseInt(array[i]);
    }
    return total;
}

alert(array + "\n" +suma(array));

let i =0;

do{
    nuevo_numero = prompt("Ingrese un nuevo numero:");
    if(nuevo_numero > 0){
        if(i < array.length){
            array[i] = nuevo_numero;
            i++;
        }else{
            i=0;
            array[i] = nuevo_numero;
            i++;
        }
    }else{
        alert(array + "\n" +suma(array));
    }
}while(nuevo_numero > 0);