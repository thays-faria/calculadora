const calculadora = {
    display: document.getElementById('display'),
    historico: document.querySelector('.historico')
}

let atual = ""
let num = ""
let hist = ""
let resultado;

//Eventos de inclusão de números//

document.getElementById('botao0').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 0
        } else {
            calculadora.display.innerText += 0
        }
    } else {
        calculadora.historico.innerText('Limite de caracteres excedido!')
        calculadora.display.innerText = ""
    }
}

document.getElementById('botao1').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 1
        } else {
            calculadora.display.innerText += 1
        }
    } else {
        calculadora.historico.innerText = 'Limite de caracteres excedido!'
        calculadora.display.innerText = ""
    }
}

document.getElementById('botao2').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 2
        } else {
            calculadora.display.innerText += 2
        }
    } else {
        calculadora.historico.innerText = 'Limite de caracteres excedido!'
        calculadora.display.innerText = ""
    }
}

document.getElementById('botao3').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 3
        } else {
            calculadora.display.innerText += 3
        }
    } else {
        calculadora.historico.innerText = 'Limite de caracteres excedido!'
        calculadora.display.innerText = ""
    }
}

document.getElementById('botao4').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 4
        } else {
            calculadora.display.innerText += 4
        }
    } else {
        calculadora.historico.innerText = 'Limite de caracteres excedido!'
        calculadora.display.innerText = ""
    }
}

document.getElementById('botao5').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 5
        } else {
            calculadora.display.innerText += 5
        }
    } else {
        calculadora.historico.innerText = 'Limite de caracteres excedido!'
        calculadora.display.innerText = ""

    }
}

document.getElementById('botao6').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 6
        } else {
            calculadora.display.innerText += 6
        }
    } else {
        calculadora.historico.innerText = 'Limite de caracteres excedido!'
        calculadora.display.innerText = ""
    }
}

document.getElementById('botao7').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 7
        } else {
            calculadora.display.innerText += 7
        }
    } else {
        calculadora.historico.innerText = 'Limite de caracteres excedido!'
        calculadora.display.innerText = ""
    }
}

document.getElementById('botao8').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 8
        } else {
            calculadora.display.innerText += 8
        }
    } else {
        calculadora.historico.innerText = 'Limite de caracteres excedido!'
        calculadora.display.innerText = ""
    }
}

document.getElementById('botao9').onclick = function() {
    if (calculadora.display.innerText.length < 8) {
        if (calculadora.display.innerText == "0") {
            calculadora.display.innerText = 9
        } else {
            calculadora.display.innerText += 9
        }
    } else {
        calculadora.historico.innerText = 'Limite de caracteres excedido!'
        calculadora.display.innerText = ""
    }
}

//Operadores//
document.getElementById('botaosoma').onclick = function() {
    atual += calculadora.display.innerText
    atual += " + "
    calculadora.display.innerText = ""
    calculadora.historico.innerText = atual

}

document.getElementById('botaosub').onclick = function() {
    atual += calculadora.display.innerText
    atual += " - "
    calculadora.display.innerText = ""
    calculadora.historico.innerText = atual

}

document.getElementById('botaomulti').onclick = function() {
    atual += calculadora.display.innerText
    atual += " * "
    calculadora.display.innerText = ""
    calculadora.historico.innerText = atual
}

document.getElementById('botaodiv').onclick = function() {
    atual += calculadora.display.innerText
    atual += " / "
    calculadora.display.innerText = ""
    calculadora.historico.innerText = atual

}

//Botão resultado//
document.getElementById('resultado').onclick = function() {
    atual += calculadora.display.innerText
    calculadora.historico.innerText = atual
    resultado = conta(atual)
    calculadora.display.innerText = resultado
    atual = ""


}

//Botão AC//
document.getElementById('btnAC').onclick = function() {
        calculadora.display.innerText = "0"
        calculadora.historico.innerText = ""
        atual = ""


    }
    //Botão C//
document.getElementById('btnC').onclick = function() {
    num = calculadora.display.innerText
    hist = calculadora.historico.innerText
    calculadora.display.innerText = num.substring(0, num.length - 1)
    if (calculadora.display.innerText == "") {
        calculadora.historico.innerText = hist.substring(0, hist.length - 1)
        atual = ""
    }

}


function conta(ex) {
    var operador = []
    var numero = []
    ex = ex.split(" ").join("")

    for (var i = 0; i < ex.length; i++) {
        if (ex[i] == "+" || ex[i] == "-" || ex[i] == "/" || ex[i] == "*") {
            numero.push(ex.slice(0, i))
            operador.push(ex[i])
            ex = ex.slice((i + 1), ex.length)
            i = 0

        }
    }
    numero.push(ex)
    var temp = parseInt(numero[0])
    numero.splice(0, 1)

    for (var i = 0; i < operador.length; i++) {
        if (operador[i] == "+") {
            temp += parseInt(numero[0])
            numero.splice(0, 1)

        }

        if (operador[i] == "-") {
            temp -= parseInt(numero[0])
            numero.splice(0, 1)

        }

        if (operador[i] == "/") {
            temp /= parseInt(numero[0])
            numero.splice(0, 1)

        }

        if (operador[i] == "*") {
            temp *= parseInt(numero[0])
            numero.splice(0, 1)

        }
    }
    if (temp / temp.toFixed(0) == 1) {
        if (Number.isNaN(temp.toFixed(0))) {
            return calculadora.display.innerText = 'Error! Insira outro número'
        } else {
            return temp.toFixed(0);
        }

    } else {
        var valor = Math.round(temp)
        if (Number.isNaN(valor)) {
            return calculadora.display.innerText = 'Error! Insira outro número'
        } else {
            return valor
        }


    }
}