alert("Bem-vido a calculadora de 4 operações, digite dois números a seguir!")
let n1 = parseInt(prompt("Informe o primeiro número: "))
let n2 = parseInt(prompt("Informe o segundo número: "))

let soma = n1+n2
let sub = n1 - n2
let multi = n1*n2
let div = n1/n2

alert(`
Os resultados são os seguintes: 
 - Adição: ${soma}
 - Subtração: ${sub}
 - Multiplicação: ${multi}
 - Divisão: ${div}
`)