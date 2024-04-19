let opt =  ""

do {
    opt = parseInt(prompt(`
    Bem vindo ao menu interativo, escolha uma das opções abaixo:
    1. Mensagem 1
    2. Mensagem 2
    3. Mensagme 3
    4. Mensagem 4
    5. Ecenrrar
    `))

    switch (opt) {
        case 1:
            alert("Nada haver irmão!")
            break;
        case 2: 
            alert("Santana acabe com ela")
            break
        case 3:
            alert("Olá Marilene")
            break
        case 4:
            alert("Nunca nem vi")
            break
        case 5:
            alert("Saindo....")
            break
        default:
            alert("Opção Inválida")
            break;
    }
} while (opt !== 5);