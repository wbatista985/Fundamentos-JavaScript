//usando a notação literal
const Obj1 = {}
console.log(Obj1)

//object em JS
console.log(typeof Object, typeof new Object)
const Obj2 = new Object
console.log(Obj2)

//funçoes construtores
function produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('caneta', 7.99, 0.15)
const p2 = new produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//função factory
function CriarFuncionario(nome, SalarioBase, Faltas) {
    return{
        nome,
        SalarioBase,
        Faltas,
        getSalario() {
            return (SalarioBase / 30) * (30 - Faltas)
        }
    }
}

const f1 = CriarFuncionario('wagner', 1399, 2)
const f2 = CriarFuncionario('marcio', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//um função famosa que retorna um objeto...
const fromJson = JSON.parse('{"info": "sou um json"}')
console.log(fromJson)