
let num = "5.5" //numero em formato string
let Palavra = "cinco" //string


let numConvertido = Number(num) // 5.5 convertido para number
console.log(numConvertido)
let palavraConvertida = Number(Palavra) //NaN )not a number
console.log(palavraConvertida)



console.log(Number("10,5")) //NaN
console.log(parseFloat("10,5")) //10
console.log(parseInt("10,5")) //10


console.log(parseInt("cinco")) //NaN
console.log(parseFloat("cinco")) //NaN

let x = NaN
let y = 10
let z = "palavra"


console.log(isNaN(y)) //false
//strings não são números, entao isNaN retorna true
//NaN não sao numeros, entao isNaN retorna true
