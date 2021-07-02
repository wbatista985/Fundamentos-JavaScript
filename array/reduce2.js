const alunos = [
    {nome:"joão",nota:7.3, bolsista: false},
    {nome:"maria",nota:9.2, bolsista: true},
    {nome:"Pedro",nota:9.8, bolsista: false},
    {nome:"joãAna",nota:8.7, bolsista: true},
]

const todosBolsistas= (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista). reduce(todosBolsistas))



const algumBolsista = ( resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))