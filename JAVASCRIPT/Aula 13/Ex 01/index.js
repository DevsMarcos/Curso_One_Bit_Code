alert("Cadastramento de recrutras")
alert("Bem-Vindo ao sistema de cadastramento de recrutras, siga o passo a passo!")

let idade = 0;
let anoAtual = 2024;

let nome = prompt("Informe o nome do recruta: ")
let sobrenome = prompt("Informe o sobrenome do recruta: ")
let anoNascimento = prompt("informe o ano de nascimento do recruta: ")
let estudo = prompt("Informe o campor de esudo do recruta: ")

idade = anoAtual - anoNascimento

alert(`
O nome completo de recruta é: ${nome} ${sobrenome}
Sua idade é de: ${idade}
Sua área de estudo é de: ${estudo}
`)