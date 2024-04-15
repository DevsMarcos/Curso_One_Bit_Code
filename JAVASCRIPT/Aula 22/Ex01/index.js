let num = parseFloat(prompt("Insira o valor a ser covnertido (em Metros): "))
let result = 0;

let opt = parseInt(prompt(`
Escolha uma das opções de conversão: 
1. milímetro (mm)
2. centímetro (cm)
3. decímetro (dm)
4. decâmetro (dam)
5. hectômetro (hm)
6. quilômetro (km)
`))

switch (opt) {
    case 1:
        result = num*1000
        alert(`O valor da versão de ${num} para MM é de: ${result} MM`)
        break;
    case 2: 
        result = num*100
        alert(`O valor da versão de ${num} para CM é de: ${result} Cm`)
        break
    case 3: 
        result = num*10
        alert(`O valor da versão de ${num} para DM é de: ${result} Dm`)
        break
    case 4:
        result = num/10
        alert(`O valor da versão de ${num} para DAM é de: ${result} Dam`)
        break
    case 5: 
        result = num/100
        alert(`O valor da versão de ${num} para HM é de: ${result} Hm`)
        break
    case 6:
        result = num/1000
        alert(`O valor da versão de ${num} para KM é de: ${result} Km`)
        break
    default:
        alert("Opção Inválida")
        break;
}