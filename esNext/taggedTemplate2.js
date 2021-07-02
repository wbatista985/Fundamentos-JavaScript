
function real(partes,...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `Rs${valor.tofixed(2)}`
        resultado.push(partes[indice], valor)
    })
   // resultado.push(partes[partes.length-1])
    return resultado.join('')
}    

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}. `)