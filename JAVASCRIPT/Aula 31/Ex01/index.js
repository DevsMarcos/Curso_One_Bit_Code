let number = parseInt(prompt("Informe o numero que você deseja sabera tabuada"))
let resultado = ""

for (let i = 1; i <=10; i++) {
    resultado += "-->" + number + "X" + i + "=" + (number*i) + "\n"
}
alert(`O resultado da tabua de ${number} é : 
${resultado}
`)
