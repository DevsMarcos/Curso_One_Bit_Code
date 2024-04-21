alert("Calculadora Geométrica")
alert("Bem-Vindo aosistema de calculadora geométrica")

function areaTriangulo(){
    let base = parseFloat(prompt("Informe a base do triangulo: "))
    let altura = parseFloat(prompt("Informe a altura do triangulo: "))
    return (base*altura) /2
}

function areaRetangulo() {
    let base = parseFloat(prompt("Informe a base do retangulo: "))
    let altura = parseFloat(prompt("Informe a altura do retangulo: "))
    return base*altura
}

function areaQuadrado(){
    let lado = parseFloat(prompt("Informe do lado do quadrdo: : "))
    return lado*lado
}

function areaTrpezio(){
    let baseMaior = parseFloat(prompt("Informe o valor da base maior: "))
    let baseMenor = parseFloat(prompt("Informe o valor da base menor: "))
    let altura = parseFloat(prompt("Informe o valor da altura: "))
    return ((baseMaior + baseMenor)*altura) / 2;
}

function areaCiruclo(){
    let raio = parseFloat(prompt("Informe o valor do raio do circulo: "))
    return 3.14*(raio*raio)
}


function menu(){
    return parseInt(prompt(
        `Selecione uma das seguintes opções ca cálculo: 
        1.Area do Triangulo;
        2.Area do Retangulo
        3.Area do Quadraado
        4.Area do Trapezio
        5.Area do Ciruculo
        6.Sair...
        `))
}

function executar(){
let opcao = 0;

do {
    opcao = menu();
    let resultado

    switch (opcao) {
        case 1:
            resultado = areaTriangulo()
            alert(`A área do triangulo é de: ${resultado}`)
            break;
        case 2:
            resultado = areaRetangulo()
            alert(`A área do retangulo é de: ${resultado}`)
            break
        case 3: 
            resultado = areaQuadrado()
            alert(`A área do quadrado é de: ${resultado}`)
            break
        case 4: 
            resultado = areaTrpezio();
            alert(`A área do trapezio é de: ${resultado}`)
            break
        case 5:
            resultado = areaCiruclo()
            alert(`A área do circulo é de: ${resultado}`)
            break
        case 6:
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida, tente novamente")
            break;
    }
} while (opcao !== 6);}

executar();