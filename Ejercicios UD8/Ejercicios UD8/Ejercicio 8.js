let n = prompt("Introduzca un número entero:")

function par_impar(n){
    if(n%2==0){
        return ("Par");
    }else{
        return("Impar");
    }
}

alert(par_impar(n));