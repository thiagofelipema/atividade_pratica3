function calculaPreçoLanHouse(){
    let valor_minuto = parseFloat(document.getElementById('preco_15minutos').value)
    let tempo_uso = parseFloat(document.getElementById('tempo_uso').value)
    let calculo = tempo_uso / 15
    let valor_a_pagar = (calculo * valor_minuto).toFixed(2)

    document.getElementById('resposta_preco').innerHTML = "Valor a pagar: R$ " + valor_a_pagar
}

let verpreco = document.getElementById('calcular_preco')
verpreco.addEventListener('click', calculaPreçoLanHouse)