//leia 2 números do usuário. Faça a conversão com a função mais adequada e realize as operações abaixo:
// some o número 1 com o número 2 e 10
// subtraia o numero 2 do numero 1
// multiplique o número 1 por 50
// divida 600 pelo número 2

//mostre no terminal todas as operações realizadas no seguinte formato: 
// "A soma do número 1 com o número 2 e 10 é: resultado"


let num1 = Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("Digite o segundo numero"))

console.log(`A soma do numero 1 com o numero 2 e 10 eh: ${num1 + num2 + 10}`)
console.log(`A subtracao do numero 2 do numero 1 eh: ${num1 - num2}`)
console.log(`A multiplicacao do numero 1 por 50 eh: ${num1 * 50}`)
console.log(`A divisao do numero 600 pelo numero 2 eh: ${600 / num2}`)