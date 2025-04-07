//funcao que atraves da API informa o valor da moeda e converte para o Real


function obterTaxaIeneJapones(apiKey) {
        //URL com a chamada da API para a moeda

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/JPY`;

    return fetch(url)
        .then(resposta => {//se a resposta não for OK ele retorna o status da resposta, para descobrir o erro
            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`);
            }
            return resposta.json();/// se a requisição for bem sucedida, retorno os valores e json e e converte para um objeto
        })
        .then(dados => {
                        //verifica se a resposta da API foi sucesso
            if (dados.result === 'success') {
                //se tudo certo retorna a moeda convertida em Real
                return dados.conversion_rates.BRL;
            } else {
                //caso não tenha tido sucesso, retorna um erro
                throw new Error(`Erro ao acessar a API`);
            }
        });
}
