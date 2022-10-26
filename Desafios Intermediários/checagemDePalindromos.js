let resultado = gets();


//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.

const checaPalindromo = (resultado) => { 
  const palindromo = resultado.split('').reverse().join('');
  return palindromo == resultado ? 'TRUE' : 'FALSE';
}

print(checaPalindromo(resultado));