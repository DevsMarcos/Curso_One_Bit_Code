const frase = prompt("Escreva uma frase/palavra para saber se é um palíndromo: ")
let invertida = ""

for (let i = frase.length -1; i >= 0; i--) {
    invertida += frase[i]
}

if(frase === invertida){
    alert("Você possui uma pálídnromo")
}else{
    alert("Não é um palíndromo")
}
