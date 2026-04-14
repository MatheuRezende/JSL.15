// 1. Leia o preco de um produto e a cor da sua etiqueta. De acordo com
// a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% |
// Amarelo - 20% | Azul - 30 % | Vermelho 40%

// switch case



let preco = parseFloat(prompt("Digite o preco do produto: "))
let cor = prompt("Digite a cor da etiqueta: ")

switch (cor) {
    case "verde":
        preco = preco - (preco * 0.10)
        console.log(`O preco do produto eh: ${preco}`)
        break;
    case "amarelo":
        preco = preco - (preco * 0.20)
        console.log(`O preco do produto eh: ${preco}`)
        break;
    case "azul":
        preco = preco - (preco * 0.30)
        console.log(`O preco do produto eh: ${preco}`)
        break;
    case "vermelho":
        preco = preco - (preco * 0.40)
        console.log(`O preco do produto eh: ${preco}`)
        break;
    default:
        console.log("Cor invalida")
        break;
}




//Peça 2 números ao usuário: um número inicial e um número final de um intervalo. Imprima todos os números entre eles (inclusive) usando um loop while.
//5 e  50 -> contagem inicia em 5 e termina em 50

let numeroInicial = parseInt(prompt("Digite o número inicial do intervalo: "))
let numeroFinal = parseInt(prompt("Digite o número final do intervalo: "))

while (numeroInicial<= numeroFinal) {
    console.log(numeroInicial)

    //atualizar a variável de controle
    numeroInicial++    
}



/* Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%*/

let preco = parseFloat(prompt("Digite o preço do produto: "))
let corEtiqueta = prompt("Digite a cor da etiqueta: ").toLowerCase() // Transforma a string para minúscula
let desconto= 0

//verde, amarelo, azul, vermelho

switch (corEtiqueta) {
    case 'verde':
        //10% de desconto
        //preco = preco - (preco * 0.1)
        preco = preco * 0.9 // 90% do preço original
        desconto = 10
        break;
    case 'amarelo':
        //20% de desconto
        //preco = preco - (preco * 0.2)
        preco = preco * 0.8 // 80% do preço original
        desconto = 20
        break;
    case 'azul':
        //30% de desconto
        preco = preco * 0.7 // 70% do preço original
        desconto = 30
        break;
    case 'vermelho':
        //40% de desconto
        preco = preco * 0.6 // 60% do preço original
        desconto = 40
        break;
    default:
        desconto = 0
        break;
}

console.log(`O preço final do produto é R$ ${preco.toFixed(2)} com um desconto de ${desconto}%`)