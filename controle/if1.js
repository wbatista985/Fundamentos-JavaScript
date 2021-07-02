function Soboanoticia (nota) {
    if (nota > 7) {
        console.log ('aprovado com' + nota)
    }
}

Soboanoticia (8.1)
Soboanoticia (6.1)

function SeforverdaEuFalo ( valor) {
    if (valor) {
        console.log ('É Verdade ...' + valor)
    }
}

 SeforverdaEuFalo ( )
 SeforverdaEuFalo (null)
 SeforverdaEuFalo (undefined)
 SeforverdaEuFalo (NaN)
 SeforverdaEuFalo ('')
 SeforverdaEuFalo (0)
 SeforverdaEuFalo (-1)
 SeforverdaEuFalo (' ')
 SeforverdaEuFalo ('?')
 SeforverdaEuFalo ([])
 SeforverdaEuFalo ([1, 2])
 SeforverdaEuFalo ({})

