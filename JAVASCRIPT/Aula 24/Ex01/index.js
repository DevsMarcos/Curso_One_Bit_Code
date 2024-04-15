alert("Ola gringo, saeja bem vindo ao cadastramento de cidades kkkkkkkk")
let questionName = prompt("Primeiramente me diga seu nome gringo: ")
let questionCity = prompt("Você ja visitou algum Pais (Sim/Não): ")
let cidades = ""
let contagem =0;

while(questionCity !== "Não"){
    let cityName = prompt("Ahhh legal, me diga o nome do País: ")
    cidades += "-"+cityName+"\n"
    questionCity = prompt("Vitiou algum outro País ? (Sim/Não)")
    contagem++;
}

alert(`Aqui está os países que você visitou gringo, perdão ${questionName}:
Número de cidades: ${contagem}
${cidades}`)