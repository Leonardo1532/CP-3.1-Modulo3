let array1 = []
let array2 = []

function Tabuada(numero) {
    for (let index = 1; index <= 10; index++) {
        let resultado = index * numero
        array1.push(resultado)
    }
    console.log(array1)

    let numero2 = numero + 1
    let numero3 = numero + 2
    for (let index = 1; index <= 10; index++) {
        let resultado1 = index * numero2
        let resultado2 = index * numero3
        array2.push(resultado1)
        array2.push(resultado2)
    }
    console.log(array2)
}

function PontosDeOnibus(array) {
    let passageiros = 0
    for (let index = 0; index < array.length; index++) {

        if (array[0][1] != 0) {
            alert("Na primeira parada não sai nenhum passageiro!")
        }
        if (array[index][0]) {
            let arrayZero = array[index][0]
            passageiros = passageiros + arrayZero
        }
        if (array[index][1]) {
            let arrayUm = array[index][1]
            passageiros = passageiros - arrayUm
        }
    }
    if (passageiros >= 0) {
        return passageiros
    } else {
        alert("Não pode ter um número de passageiros negativo!")
    }
}

function Bingo(array) {
    let contador = 0
    let arrayNovo = []
    for (let index = 0; index < array.length; index++) {

        if (array[index] < 1 || array[index] > 26) {
            alert("Número fora do permitido")
        } else {
            if (array[index] == 2 || array[index] == 9 || array[index] == 14 || array[index] == 7 || array[index] == 15) {
                arrayNovo.push(array[index])
            }
        }
    }

    if (arrayNovo.includes(2) && arrayNovo.includes(9) && arrayNovo.includes(14) && arrayNovo.includes(7) && arrayNovo.includes(15)) {
        return "Ganhou"
    } else {
        return "Perdeu"
    }
}