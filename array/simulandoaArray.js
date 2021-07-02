const quaseArray = {0:'Rafael', 1:'Ana', 2:'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray,'toSting',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quaseArray)

const meuArray = ['Rafael','Ana','Bia']
console.log(quaseArray.toString(),meuArray)