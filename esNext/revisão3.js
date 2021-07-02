// Es8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias em notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ela(){
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ela())

//class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au!'
    }
}

console.log(new Cachorro(). falar())