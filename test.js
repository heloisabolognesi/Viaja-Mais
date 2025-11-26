const inputRenda = document.getElementById('renda-familiar')
const inputPessoas = document.getElementById('numero-dependentes')
const filtro = document.getElementById('botao')
const sideBar = document.getElementById('sideBar')
const resultado = document.getElementById('resultado-desconto')
const precoFinal = document.getElementById('preco-final')

// define o preço base da viagem aqui:
const precoDaViagem = 1000

filtro.addEventListener('click', function(){

    const renda = Number(inputRenda.value)
    const numeroPessoas = Number(inputPessoas.value)
    const perCapita = renda / numeroPessoas

    let desconto = 0
    let mensagem = ''

    if (perCapita < 660) {
        desconto = precoDaViagem * 0.85
        mensagem = 'Você tem 85% de desconto'
    }
    else if (perCapita >= 660 && perCapita < 1500) {
        desconto = precoDaViagem * 0.75
        mensagem = 'Você tem 75% de desconto'
    }
    else if (perCapita >= 1500 && perCapita < 2000) {
        desconto = precoDaViagem * 0.65
        mensagem = 'Você tem 65% de desconto'
    }
    else if (perCapita >= 2000 && perCapita < 3000) {
        desconto = precoDaViagem * 0.25
        mensagem = 'Você tem 25% de desconto'
    }
    else {
        desconto = precoDaViagem
        mensagem = 'Você não tem direito a desconto'
    }

    resultado.textContent = mensagem
    precoFinal.textContent = `Preço final: R$ ${desconto.toFixed(2)}`
})
