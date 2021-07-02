const checarIdade = () => new Promise((resolve, reject) => {
  setTimeout (() => { resolve ( 'maior que 18')}, 2000);
});

checarIdade (20)
.then (idade => {
  console.log(idade)
});

checarIdade (20)
.catch(idade => {
  console.log( "menor que 18 "( idade))
});