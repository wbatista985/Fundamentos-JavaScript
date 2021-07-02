//não aceita repatição / não indexada
const times = new Set()
times.add('vasco')
times.add('sao paulo').add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.has('vasco'))
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)