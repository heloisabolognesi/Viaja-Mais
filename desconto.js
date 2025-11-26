const inputRenda = document.getElementById('renda-familiar')
const inputPessoas = dosument.getElementById('numero-dependentes')
const filtro = document.getElementById('botao')
const sideBar = document.getElementById('sideBar')

filtro.addEventListener('click', function(){
    const renda = inputRenda.value.split(',').map  (i=> Number(i.trim()))
    const numeroPessoas = inputPessoas.value.split(',').map  (i=> Number(i.trim()))
    const perCapita = renda / numeroPessoas
    
    switch (perCapita){
    case perCapita < 660:
    const desconto1 = precodaviagem * 0.15 //85%
    sideBar.textContent = 'Você tem 85% de desconto'
    break;
    case perCapita > 660 && perCapita < 1500:
    const desconto2 = precodaviagem * 0.25 //75%
    sideBar.textContent = 'Você tem 75% de desconto'
    break;
    case perCapita > 1500 && perCapita < 2000:
    const desconto3 = precodaviagem * 0.35 //65%
    sideBar.textContent = 'Você tem 65% de desconto'
    break;
    case perCapita > 2000 && perCapita < 3000:
    const desconto4 = precodaviagem * 0.75 //25%
    sideBar.textContent = 'Você tem 75% de desconto'
    break;
    default:
    sideBar.textContent = 'Você não tem direito a desconto'
    break;
    }

    
    
})

//Passagem/Hospedagem
const passagemTeste = document.getElementById('passagemTeste');
const hospedagemTeste = document.getElementById('hospedagemTeste');
const aplicaDesconto = document.getElementById('botao');

aplicaDesconto.addEventListener('click', function(){
    
})