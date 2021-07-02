//par nome / valor
const saudacao = 'opa' //contexto léxico1

function exec (){
    const saudacao = 'falaaa'// contexto léxico 2
return saudacao
}

//objetos são grupos aninhados de pares/valor
const client ={
    nome : 'Pedro',
    idade : 32,
    peso : 90,
    endereco :{
        logradouro : 'Rua muito legal',
        numero : 123
    }
}

console.log (saudacao)
console.log (exec())
console.log (client)