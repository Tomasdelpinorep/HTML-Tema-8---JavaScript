function cambiarOrden(unArray){
    let r1 = Math.floor(Math.random()*unArray.length);
    let r2;

    do{
        r2 = Math.floor(Math.random()*unArray.length);
    }while(r1==r2); //para que no se repita el mismo número

    let val1= unArray[r1];
    let val2= unArray[r2];

    unArray.splice(r1,1,val2); //posición a partir de la que borro | cúantos elementos borro | que pongo en su lugar
    unArray.splice(r2,1,val1);

    return unArray;
}


function trocearURL(stringUrl) {
  let array = stringUrl.split("://");
  let todoMenosProtocolo = array.pop(); //pop devuelve el último elemento del array

  let partes = todoMenosProtocolo.split("/"); //aquí tenemos un array de la URL después del protocolo
    for (let parte of partes) {
      let subpartes = parte.split("."); //un array de las partes de la URL separadas por . (entre dos /)
    for (subparte of subpartes) {
      array.push(subparte);
    }
  }
  return array;
}

function principal(){
  url = prompt("Escriba una url");
  let random = Math.floor(Math.random()*10);
  array = trocearURL(url);


  for(let i = 0; i<random; i++){
    array = cambiarOrden(array);
  }
  return array
}

alert(principal());