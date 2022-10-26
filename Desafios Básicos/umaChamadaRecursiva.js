let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

function somatorio(n){
  if (n == 0 ){
    return 0;
  } else {
    return somatorio(n-1) + n;
  }
}
   print(somatorio(n));
 