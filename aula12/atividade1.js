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
c