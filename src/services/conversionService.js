const conversionRepository = require('../repositories/conversionRepository')
const { getConversion } = require('../utils/axios')

exports.registerConversion = async (userId, cryptoName, amount) => {
    const { brl, usd } = await getConversion(cryptoName.toLowerCase())

    const conversion = {
        userId, 
        cryptoName, 
        amount, 
        brl: brl * amount, 
        usd: usd * amount,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }
    
    return await conversionRepository.saveConversion(conversion);
}

exports.historyConversion = async (userId) => {
    return await conversionRepository.getHistory(userId);
}