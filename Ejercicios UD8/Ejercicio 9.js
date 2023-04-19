let cadena = prompt("Ingrese una cadena: ");

function mostrarInfo(cadena){
    if(cadena.toUpperCase() === cadena){
        return ("Esta cadena está en mayúsculas");
    }else if(cadena.toLowerCase() === cadena){
        return ("Esta cadena está en minúsculas");
    }else{
        return ("Esta cadena está formado por tanto mayúsculas como minúsculas");
    }
}

alert(mostrarInfo(cadena));