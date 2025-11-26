let total = 0


const inputPassagem = document.getElementById('preco-passagem')
const inputHotel = document.getElementById('preco-hotel')
const inputAlimentacao = document.getElementById('preco-alimentacao')
const calcular = document.getElementById('calcular-total')


calcular.addEventListener('click', function(){
    const passagem = inputPassagem.value.split(',').map(i => Number(i.trim()))[0]     // pega o primeiro número
    const hotel = inputHotel.value.split(',').map(i => Number(i.trim()))[0]     // pega o primeiro número
    const alimentacao = inputAlimentacao.value.split(',').map(i => Number(i.trim()))[0]     // pega o primeiro número

    total = passagem + hotel + alimentacao

    document.getElementById('total-sidebar').textContent =`Total da viagem: R$ ${total.toFixed(2)}`

})













const inputRenda = document.getElementById('renda-familiar')
const inputPessoas = document.getElementById('numero-dependentes')
const filtro = document.getElementById('botao')
const sideBar = document.getElementById('sideBar')
const resultado = document.getElementById('resultado-desconto')
const precoFinal = document.getElementById('preco-final')




filtro.addEventListener('click', function(){

    //  split e map
    const renda = inputRenda.value.split(',').map(i => Number(i.trim()))[0]     // pega o primeiro número

    const numeroPessoas = inputPessoas.value.split(',').map(i => Number(i.trim()))[0]     // pega o primeiro número

    const perCapita = renda / numeroPessoas

    let desconto = 0
    let mensagem = ''

    
    if (perCapita < 660) {
        desconto = total * 0.15
        mensagem = 'Você tem 85% de desconto'
    }
    else if (perCapita > 660 && perCapita < 1500) {
        desconto = total * 0.25
        mensagem = 'Você tem 75% de desconto'
    }
    else if (perCapita > 1500 && perCapita < 2000) {
        desconto = total * 0.35
        mensagem = 'Você tem 65% de desconto'
    }
    else if (perCapita > 2000 && perCapita < 3000) {
        desconto = total * 0.75
        mensagem = 'Você tem 25% de desconto'
    }
    else {
        desconto = total
        mensagem = 'Você não tem direito a desconto'
    }

    // atualiza sidebar 
    resultado.textContent = mensagem
    precoFinal.textContent = `Preço final: R$ ${desconto.toFixed(2)}`
})
