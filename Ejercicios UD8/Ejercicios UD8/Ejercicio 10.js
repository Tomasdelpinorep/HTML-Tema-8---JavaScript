let cadena = prompt("Ingrese una cadena: ");

function comprobarPalindromo(cadena){
    cadena = cadena.toLowerCase().replace(/\s/g,'');
    if( cadena.split().reverse().join('')){
        return ("Esta cadena es un palindromo");
        
    }else{
        return ("Esta cadena no es un palindromo");
    }
}

alert(comprobarPalindromo(cadena));