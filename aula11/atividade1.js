let salario = Number(prompt("Digite o salário:"))

let aumento = salario * 0.20
let novoSalario = salario + aumento

alert("Novo salário com aumento: R$ " + novoSalario.toFixed(2))