//Funcao para obter o valor das moedas e exibir na tabela

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '7cd6485b5e4d6946c1533b0d';

    /* Obter o valor do Iene Japonês */
    obterTaxaIeneJapones(apiKey) //chama a função para obter o valor da moeda, através da API
        .then(ieneRate => { 
            //Quando obtem a resposta, ele encontra o elemento no HTML e preenche com o valor convertido com 3 casa decimais 
            document.getElementById('JPY').innerText = `R$ ${ieneRate.toFixed(3)}`;
        })
        .catch(error => {
            //se houver algum erro, ele reporta no console
            console.error('Erro ao obter a taxa do Iene Japonês: ', error);
        });

    /* Obter o valor do Dólar Canadense */
    obterTaxaDolarCanadense(apiKey)//chama a função para obter o valor da moeda, através da API
        .then(cadRate => {
                        //Quando obtem a resposta, ele encontra o elemento no HTML e preenche com o valor convertido com 3 casa decimais 

            document.getElementById('CAD').innerText = `R$ ${cadRate.toFixed(3)}`;
        })
        .catch(error => {
             //se houver algum erro, ele reporta no console

            console.error('Erro ao obter a taxa do Dólar Canadense: ', error);
        });

    /* Obter o valor do Euro */
    obterTaxaEuro(apiKey) //chama a função para obter o valor da moeda, através da API
        .then(euroRate => {
            //Quando obtem a resposta, ele encontra o elemento no HTML e preenche com o valor convertido com 3 casa decimais 

            document.getElementById('EUR').innerText = `R$ ${euroRate.toFixed(3)}`;
        })
        .catch(error => {
            //se houver algum erro, ele reporta no console
            console.error('Erro ao obter a taxa do Euro: ', error);
        });

    /* Obter o valor do Rublo Russo */
    obterTaxaRubloRusso(apiKey)//chama a função para obter o valor da moeda, através da API
        .then(rubloRate => {
                        //Quando obtem a resposta, ele encontra o elemento no HTML e preenche com o valor convertido com 3 casa decimais 

            document.getElementById('RUB').innerText = `R$ ${rubloRate.toFixed(3)}`;
        })
        .catch(error => {
            //se houver algum erro, ele reporta no console
            console.error('Erro ao obter a taxa do Rublo Russo: ', error);
        });

    /* Obter o valor do Dólar */
    obterTaxaDolar(apiKey)//chama a função para obter o valor da moeda, através da API
        .then(dolarRate => {
                        //Quando obtem a resposta, ele encontra o elemento no HTML e preenche com o valor convertido com 3 casa decimais 

            document.getElementById('USD').innerText = `R$ ${dolarRate.toFixed(3)}`;
        })
        .catch(error => {
            //se houver algum erro, ele reporta no console
            console.error('Erro ao obter a taxa do Dólar: ', error);
        });
});
