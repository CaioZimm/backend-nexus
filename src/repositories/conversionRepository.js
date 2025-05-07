const Conversion = require('../models/Conversion');

exports.conversion = async (conversion) => {
    try {
        const newConversion = await Conversion.create(conversion)

        return newConversion
        
    } catch (error) {
        throw new Error('Erro ao converter: ' + error.message);
    }
}

exports.history = async (userId) => {
    try {
        const history = await Conversion.findAll({ where: { userId }})

        if (!history || history.length === 0) {
            throw new Error('Sem histórico até o momento');
        }

        return history;

    } catch (error) {
        throw new Error('Erro ao acessar histórico: ' + error.message);
    }
}