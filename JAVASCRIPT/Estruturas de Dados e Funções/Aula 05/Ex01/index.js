let fila = []
let opcao = 0

alert("Bem vind a fila de espera co consultório do Dr. Marcos")
do {
    let pacientes = ""
    for (let paciente = 0; paciente < fila.length; paciente++) {
        pacientes += "\n"+(paciente +1) +"°" + fila[paciente]  + "\n"   
        
    }
    opcao = parseInt(prompt(`
    Pacientes na fila: ${pacientes}
    Escolha uma ads opções -
    1. Adicionar novo paciente
    2. Consultar paciente
    3. Sair...
    `))

    switch (opcao) {
        case 1:
            let addPaciete = prompt("Informe o nome do paciente: ")
            fila.push(addPaciete)
            alert("Paciente adcionado com sucesso!")
            break
        case 2: 
            const pacienteConsultado = fila.shift();
            if(!pacienteConsultado){
                alert("Não há paciente na fila!")
            }else{

                alert(`${pacienteConsultado} consultado!`)
            }
            break
        case 3:
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida, tente novamente!")
    }
} while (opcao !== 3);