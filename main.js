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

trajetoInput.addEventListener('input', function() {
    var valorDigitado = parseFloat(trajetoInput.value);
    if (!isNaN(valorDigitado)) {
        valorOriginal = valorDigitado;
    }
    else {
        valorOriginal = 0
    }
});

volta.addEventListener('change', function(e) {
    e.preventDefault();
    var trajeto = parseFloat(trajetoInput.value);
    if (isNaN(trajeto)) return;
    if (volta.checked == true) {
        trajetoInput.value = trajeto * 2;
        jaDobrado = true;

    } else if (volta.checked == false) {
        jaDobrado = false;
    };

    if (jaDobrado === false) {
        trajetoInput.value = valorOriginal;
    };
});



function dobro(valor) {
    return valor * 2;
}

// termina aquui

var botao = document.getElementById('calcular');


botao.addEventListener('click', function(e) {
    e.preventDefault();

    var trajeto = parseFloat(document.getElementById('trajeto').value);
    var consumo = parseFloat(document.getElementById('consumo').value);
    var preco = parseFloat(document.getElementById('preco').value);

    var resultado = parseFloat(calcular(trajeto, consumo, preco));

    var precoGasolina = document.getElementById('precodagasolina');
    var litrosgastos = document.getElementById('litrosgastos');
    var totalPagar = document.getElementById('totalpagar');

    
    // PREÇO DA GASOLINA
    let h3Preco = document.createElement('h3');
    let h3PrecoValor = document.createElement('h3');

    h3Preco.textContent = `Preço da Gasolina:`;
    h3PrecoValor.textContent = `R$${preco.toFixed(2)}`;

    precoGasolina.appendChild(h3Preco);
    precoGasolina.appendChild(h3PrecoValor);

    // CONSUMO DO CARRO
    let h3LitrosGastos = document.createElement('h3');
    let h3LitrosGastosValor = document.createElement('h3');

    h3LitrosGastos.textContent = `Consumo do Carro:`;
    h3LitrosGastosValor.textContent = `R$${consumo}Km/L`;

    litrosgastos.appendChild(h3LitrosGastos);
    litrosgastos.appendChild(h3LitrosGastosValor);

    // PAGAMENTO DA GASOLINA 
    let h3Pagamento = document.createElement('h3');
    let h3PagamentoValor = document.createElement('h3');

    h3Pagamento.textContent = `Pagamento da Gasolina:` ;
    h3PagamentoValor.textContent = `R$${resultado.toFixed(2)}`;

    totalPagar.appendChild(h3Pagamento);
    totalPagar.appendChild(h3PagamentoValor);

    
    console.log(resultado);
})