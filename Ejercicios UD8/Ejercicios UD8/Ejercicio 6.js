var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numero_usuario = prompt("Ingrese su número del DNI:")
let letra_usuario = prompt("Ingrese su letra del DNI:")
letra_real=letras[numero_usuario % 23];

if(numero_usuario > 99999999 || numero_usuario < 0){
    alert("Ha indicado un número no válido");
}else{
    if(letra_usuario == letra_real){
        alert("Has ingresado correctamente");
    }else{
        alert("Ha ingresado una letra incorrecta");
    }
}
