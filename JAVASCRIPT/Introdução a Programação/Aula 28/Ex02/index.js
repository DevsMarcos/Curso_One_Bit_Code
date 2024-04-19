alert("Bem vindo ao sistema de controle financeiro")
let qtdInicial = parseFloat(prompt("Informe a quantiade de dinheiro inicial que você possui: "))
let admMoney = 0
let opt = ""

do {
    opt = parseInt(prompt(`
    Escolha uma das opções abaixo para executar em seu montaten inicial: R$${qtdInicial}
    1.Adicionar Dinheiro
    2.Remover Dinheiro
    3.Sair
    `))

    switch (opt) {
        case 1:
            admMoney = parseFloat(prompt("Quanto de dinheiro você deseja adicionar: "))
            qtdInicial+=admMoney
            break;
        case 2:
            admMoney = parseFloat(prompt("Quanto de dinheiro você deseja remover: "))
            qtdInicial-=admMoney
            break
        case 3:
            alert("Saindo...")
            break
        default:
            alert("Opção inválida")
            break;
    }
} while (opt !== 3);