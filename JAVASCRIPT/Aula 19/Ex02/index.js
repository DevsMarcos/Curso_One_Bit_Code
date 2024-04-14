let nameAttack = prompt("Informe o nom do personage atacante: ")
let pointsAtacck = parseFloat(prompt("Informe a quantidade de pontos de ataque: "))

let nameDefense = prompt("Imforme o nome do perosangem defensor: ")
let poitsLife = parseFloat(prompt("Informe a quantidade de pontos de vida do mesmo: "))
let pointDefense = parseFloat(prompt("Informe a quanitdade de pontos de defesa: "))
let shiel = prompt("Ele possui um escudo (Sim/Não): ")

let dano = 0;

if (pointsAtacck > pointDefense && shiel == "Não"){
    dano += pointsAtacck - pointDefense;
    poitsLife -= dano;
} else if(pointsAtacck > pointDefense && shiel == "Sim") {
    dano += (pointsAtacck - pointDefense)/2
    poitsLife -= dano
} else {
    alert("Dano causado nulo")
}

alert(`${nameAttack} causou ${dano} de dano em ${nameDefense}`)

alert(`Informasções atulizadas: 
Atacante: ${nameAttack}
Pontos de dano: ${pointsAtacck}

Defensor: ${nameDefense}
Pontos de vida ${poitsLife}
Pontos de Defesa: ${pointDefense}
Escudo: ${shiel}
`)