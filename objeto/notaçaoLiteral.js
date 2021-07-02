const a = 1
const b = 2
const c = 3

const Obj1 = {a: a, b: b, c: c}
const Obj2 = {a, b, c}
console.log(Obj1, Obj2)

const nomeArt = 'nota'
const valorAttr = 7.87

const Obj3 = {}
Obj3[nomeArt] = valorAttr
console.log(Obj3)

const Obj4 = {[nomeArt]: valorAttr}
console.log(Obj4)

const Obj5 = {
    funcao1: function() {
        //....
    },
    funcao2 (){
        //...
    }
}
console.log(Obj5)
