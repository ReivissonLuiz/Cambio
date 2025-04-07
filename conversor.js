
//inicia as moedas com valor 0.0 para não ocorrer bugs na hora de puxar os dados
let taxasDeCambio = {
    JPY: 0,
    CAD: 0,
    EUR: 0,
    RUB: 0,
    USD: 0
};


//função para chamar os dados da API 
async function obterTaxasDeCambio() {
    const url = `https://api.exchangerate-api.com/v4/latest/BRL`; //puxa os dados através da moeda BRL, para de outras moeda

    try {
        let resposta = await fetch(url); //faz a requisição e aguarda a resposta

        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        } //se a resposta não for bem sucedida informa o erro

        let dados = await resposta.json(); ///converte os dados de json, para objeto

        console.log(dados); // retorno o valor das taxas no console

        if (!dados.rates) {//verifica se contem erro nos dados
            throw new Error("Os dados retornados não contêm 'rates'");
        }

        // Atualiza as taxas de câmbio
        taxasDeCambio.JPY = dados.rates.JPY || 0;
        taxasDeCambio.CAD = dados.rates.CAD || 0;
        taxasDeCambio.EUR = dados.rates.EUR || 0;
        taxasDeCambio.RUB = dados.rates.RUB || 0;
        taxasDeCambio.USD = dados.rates.USD || 0;

        console.log("Taxas de câmbio atualizadas:", taxasDeCambio);//mostra no console os valores atualizados SE RETIRAR NÃO FUNCIONA
    } catch (error) {
        console.error("Erro ao obter as taxas de câmbio:", error);//indica se houver erro
    }
}

// Executa ao carregar a página
document.addEventListener('DOMContentLoaded', obterTaxasDeCambio);

//função para fazer as conversões
function convertCurrency() {
    const quantia = document.getElementById("quantia").value;//pega do formulario a quantia digitada
    const moedaOrigem = document.getElementById("moedaOrigem").value;//recebe a moeda de origem
    const moedaDestino = document.getElementById("moedaDestino").value;//recebe a moeda de destino

    //verifica se o valor digitado não é um número ou está vazio
    if (isNaN(quantia) || quantia.trim() === "") {
        document.getElementById("result").value = "Valor inválido";
        return;
    }
    //obtem as taxas de cambio, das respectivas moedas
    const taxaOrigem = taxasDeCambio[moedaOrigem];
    const taxaDestino = taxasDeCambio[moedaDestino];

    //se o usuario selecionar a mesma moeda de origem e destino, retorno o mesmo valor 
    if (moedaOrigem === moedaDestino) {
        document.getElementById("result").value = `${quantia} ${moedaDestino}`;
        return;
    }

    //variavel onde a conversão será armazenada
    let valorConvertido;

    //faz a conversao

    // se for real para outra moeda multiplica
    if (moedaOrigem === "BRL") {
        valorConvertido = quantia * taxaDestino;
    }
    //se for de outra moeda para real, é dividido
    else if (moedaDestino === "BRL") {
        valorConvertido = quantia / taxaOrigem;
    } else {
        //se for moedas distintas do real, primeiro converte para BRL, depois multiplica pela moeda de destino
        const quantiaBRL = quantia / taxaOrigem;
        valorConvertido = quantiaBRL * taxaDestino;
    }

    //exibe o valor convertido no campo "result" com 2 casas decimais
    document.getElementById("result").value = valorConvertido.toFixed(2) + " " + moedaDestino;
}
