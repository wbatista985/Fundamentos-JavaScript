const Pilotos = ['Vettel','Alonso','Haikonen','Massa']
Pilotos.pop() //massa fora
console.log(Pilotos)

Pilotos.push('Verstappen')
console.log(Pilotos)

Pilotos.shift() //remove o primeiro
console.log(Pilotos)

Pilotos.unshift('Hamilton')
console.log(Pilotos)

//splice pode adicionar e remover elementos

//adicionar
Pilotos.splice(2, 0,'Botton','Massa')
console.log(Pilotos)

//remover
Pilotos.splice(3, 1) //massa fora
console.log(Pilotos)

const algunsPilotos1 = Pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = Pilotos.slice(1, 4)
console.log(algunsPilotos2)