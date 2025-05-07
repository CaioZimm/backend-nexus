const Conversion = require('../models/Conversion');

exports.saveConversion = async (conversion) => {
    try {
        const newConversion = await Conversion.create(conversion)

        return newConversion
        
    } catch (error) {
        throw new Error('Erro ao converter: ' + error.message);
    }
}

exports.getHistory = async (userId) => {
    try {
        const history = await Conversion.findAll({ where: { userId }, order: [['createdAt', 'DESC']]});

        if (!history || history.length === 0) {
            throw new Error('Sem histórico até o momento');
        }

        return history;

    } catch (error) {
        throw new Error('Erro ao acessar histórico: ' + error.message);
    }
}