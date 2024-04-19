let imoveis = []
let option = 0

alert("CADASTRO DE IMOVEIS")
do {
    option = parseInt(prompt(`
    Bem Vindo ao cadastro de imoveis. Imoveis totais cadastrados: ${imoveis.length}
    Selecione uma das seguintes opções: 
    1.Cadastrar Novo imovel
    2.Remover último imovel cadastrado
    3.Mostar Imoveis
    4.Sair...
    `))
    switch (option) {
        case 1:
            const imovel = {}
            imovel.proprietario = prompt("Informe inicialmente o nome do proprietário: ")
            imovel.quantidadeQuartos = parseInt(prompt("Informe a quantidde de quartos: "))
            imovel.quantidadeBanheiros = parseInt(prompt("Informe a quantidade de banheiros: "))
            imovel.possuiGaragem = prompt("Possui garamgem [S/N]: ")
            imoveis.push(imovel)
            alert("Imovel cadatrado com sucesso!")
            break;
        case 2:
            const imovelRemovido = imoveis.pop()
            if(!imovelRemovido){
                alert("Não há imoveis na lista")
            }else{
                alert("Último imovel removido")
            }
            break
        case 3:
            for (let i = 0; i < imoveis.length; i++) {
                alert(`
                Proprietário: ${imoveis[i].proprietario}
                Quantidade de quartos: ${imoveis[i].quantidadeQuartos}
                Quantidade de Banheiros: ${imoveis[i].quantidadeBanheiros}
                Garagem: ${imoveis[i].possuiGaragem}
                `)
            }
            break
        default:
            alert("Opção inváldia")
            break;
    }
} while (option !== 4);