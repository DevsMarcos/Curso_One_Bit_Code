let deck = []
let opt = 0

alert("Bem vindo ao deck de cartas")
do {
    opt = parseInt(prompt(`
    Quantidade de cartas: ${deck.length}
    Escolha uma as opções a baixo: 
    1. Acionar carta
    2. Remover carta
    3. Sair...
    `))

    switch (opt) {
        case 1:
            let addCard = prompt("Informe o nome da carta: ")
            deck.push(addCard)
            alert(`${addCard} adicionada com sucesso! `)
            break;
        case 2: 
            let removeCard = deck.pop();
            if(!removeCard){
                alert("Nenhuma carta no deck!")
            }else{
                alert(`${removeCard} retirada!`)
            }
            break
        case 3:
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida!")
            break;
    }
} while (opt !== 3);