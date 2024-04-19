const idade = prompt("Informe a sua idade: ")

//Duas formas de utilziar o IF
if (idade > 18){
    alert("De maior")
}else {
    alert("De menor")
}

if (idade > 18){
    alert("De maior")
}else if (idade > 12){
    alert("De menor")
}else{
    alert("Você é cirança")
}

//EXEMPLODE TERNÁRIO
const result = (idade < 18) ? "Você é de menor" : "Você é de maior"