let comparaComthis = function(param) {
    console.log(this === param)
}

comparaComthis(global)

const obj = {}
comparaComthis = comparaComthis.bind(obj)
comparaComthis(global)
comparaComthis(obj)

let comparaComthisArrow = param =>console.log(this === param)
comparaComthisArrow(global)
comparaComthisArrow(module.exports)

comparaComthis = comparaComthisArrow.bind(obj)
comparaComthisArrow(obj)
comparaComthisArrow(module.exports)