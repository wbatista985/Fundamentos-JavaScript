//coleção dinâmica de pares/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'

console.log(produto)
delete produto.preco
delete produto ['marca do produto']
console.log(produto)

const carro = {
    modelo:'A4',
    valor: 89000,
    propietario:{
        nome:'Raul',
        idade: 56,
        endereco:{
            logradouro:'Rua ABC',
            numero: 123
        }
    },
    condutores:[{
        nome:'Junior',
        idade:19
    }, {
        nome:'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
      //....
    }
}

carro.propietario.endereco.numero = 1000
carro['propietario']['endereco']['logradouro'] = 'Av gigante'
console.log(carro)

//delete carro.condutores
delete carro.propietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)