// function dobro(trajeto) {
//     trajeto = parseFloat(trajeto)
//     idaEVolta = trajeto * 2;
//     return idaEVolta;
// }

function calcular(trajeto, consumo, preco) {
    trajeto = parseFloat(trajeto);
    consumo = parseFloat(consumo);
    preco = parseFloat(preco);

    var litros = trajeto / consumo;
    var aPagar = litros * preco;
    return aPagar;
    
}

// começa aqui
var volta = document.getElementById('volta');
var trajetoInput = document.getElementById('trajeto');
var valorOriginal = 0;
var jaDobrado = false;

volta.addEventListener('change', function(e) {
    e.preventDefault();
    let cont = 0 // entender por que esse cont só aumenta uma vez
    var trajeto = parseFloat(trajetoInput.value);
    if (isNaN(trajeto)) return;
    console.log("checked: ", volta.checked)

    if (volta.checked == true) {
        cont++ 
        trajetoInput.value = trajeto * 2;
        console.log("cont:", cont)
        console.log("ultimo valor do trajeto:",trajeto)
        if (cont % 2 == 0) {
            jaDobrado = true;
        }

    } else if (volta.checked == false) {
        cont++
        jaDobrado = false;
    }
    
});

trajetoInput.addEventListener('input', function() {
    var valorDigitado = parseFloat(trajetoInput.value);
    if (!isNaN(valorDigitado) && valorOriginal === 0) {
        valorOriginal = valorDigitado;
    }
});

function dobro(valor) {
    return valor * 2;
}

// termina aquui

var botao = document.getElementById('calcular');


botao.addEventListener('click', function(e) {
    e.preventDefault();

    var trajeto = document.getElementById('trajeto').value;
    var consumo = document.getElementById('consumo').value;
    var preco = document.getElementById('preco').value;

    var resultado = calcular(trajeto, consumo, preco);

    console.log(resultado);
})