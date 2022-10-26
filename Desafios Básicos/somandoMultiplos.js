var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
soma = 0;
for (let i = 0; i <= N; i++){
  if (i % a == 0){
    soma += i;
  }
}
    print(soma);