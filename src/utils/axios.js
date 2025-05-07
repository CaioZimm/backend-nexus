const axios = require('axios');

exports.getConversion = async (cryptoId) => {
    try {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl,usd`;

        const response = await axios.get(url)

        if(!response.data[cryptoId]){
            throw new Error('Criptomoeda não encontrada na API.');
        }

        return response.data[cryptoId]

    } catch (error) {
        throw new Error('Erro ao obter dados da API externa: ' + error.message);
    }
    
}