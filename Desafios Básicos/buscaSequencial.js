let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.
  let achou = false;
  let i = 0;
  while ( (i < elementos.length) && (!achou) ){
    if ( valor == elementos[i]){
      achou = true;
    } else {
      i = i + 1;
    }
  }
  
  if (achou) {
    print("Achei "+elementos[i]+" na posicao "+i);
  } else{
    print("Numero "+valor+" nao encontrado!");
  }