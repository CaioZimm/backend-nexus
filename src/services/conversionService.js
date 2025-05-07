const conversionRepository = require('../repositories/conversionRepository')

exports.registerConversion = async (userId, cryptoId, amount, brl, usd) => {
    const conversion = {
        userId, 
        cryptoId, 
        amount, 
        brl, 
        usd
    }
    
    return await conversionRepository.conversion(conversion);
}

exports.historyConversion = async (userId) => {
    return await conversionRepository.history(userId);
}