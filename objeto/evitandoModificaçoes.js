//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualque', preco:1.99, tag:'promoção'
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escol branca'
delete produto.tag
console.log(produto)

//Object seal
const pessoa = {nome:'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selada:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado+ valores constantes

