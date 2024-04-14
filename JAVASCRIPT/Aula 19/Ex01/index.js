//Coletando o nome e a velocidade de cada carro

let car1 = prompt("Informe o nome do primeiro carro: ")
let speed1 = parseInt(prompt("Informe a velocidade do primeiro carro em Km/H: "))

let car2 = prompt("Informe o nome do primeiro carro: ")
let speed2 = parseInt(prompt("Informe a velocidde do segundo carro em Km/H: "))

if (speed1 > speed2){
    alert(`O carro ${car1} possui velocidade de ${speed1} Km/H comparado ao ${car2} 
    que possui velocidade de ${speed2} Km/H, sendo assi mais rápido.`)
} else if(speed2 > speed1){
    alert(`O carro ${car2} possui velocidade de ${speed2} Km/H comparado ao ${car1} 
    que possui velocidade de ${speed1} Km/H, sendo assim mais rápido.`)
} else{
    alert("Os carros possuem velocidade iguais.")
}