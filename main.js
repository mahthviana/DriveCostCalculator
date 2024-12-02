function dobro(trajeto) {
    trajeto = parseFloat(trajeto)
    idaEVolta = trajeto * 2;
    return idaEVolta;
}

function calcular(trajeto, consumo, preco) {
    trajeto = parseFloat(trajeto);
    consumo = parseFloat(consumo);
    preco = parseFloat(preco);

    var litros = trajeto / consumo;
    var aPagar = litros * preco;
    return aPagar;
    
}

var volta = document.getElementById('volta');

volta.addEventListener('change', function(e) {
    e.preventDefault();
    var volta = document.getElementById('volta');
    
    var trajeto = document.getElementById('trajeto').value;
    var trajetoIdaEVolta = dobro(trajeto);

    // tentando fazer uma verificação para dobrar o valor ou voltar ao valor inicial
    if (volta.checked == true) {
        document.getElementById('trajeto').value = trajetoIdaEVolta;
    }
    else if (volta.checked = false) {
        var valorInicial = trajetoIdaEVolta / 2
        document.getElementById('trajeto').value = valorInicial
    }



    
})

var botao = document.getElementById('calcular');


botao.addEventListener('click', function(e) {
    e.preventDefault();

    var trajeto = document.getElementById('trajeto').value;
    var consumo = document.getElementById('consumo').value;
    var preco = document.getElementById('preco').value;

    var resultado = calcular(trajeto, consumo, preco);

    console.log(resultado);
})


