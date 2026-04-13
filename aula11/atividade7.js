let num1 = 10
let num2 = 20
let num3 = 30

if(num1 > num2 && num1 > num3){
    console.log(`${num1} eh maior que ${num2} e ${num3}`)
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2} eh maior que ${num1} e ${num3}`)
}else{
    console.log(`${num3} eh maior que ${num1} e ${num2}`)
}