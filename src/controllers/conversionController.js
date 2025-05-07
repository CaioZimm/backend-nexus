const conversionService = require('../services/conversionService')
const { getConversion } = require('../utils/axios');

exports.registerConversion = async (req, res) => {
    const { cryptoId, amount, brl, usd } = req.body
    const userId = req.user.id
    
    try {
        const conversion = await conversionService.registerConversion(userId, cryptoId, amount, brl, usd)
        return res.status(201).json({ message: 'Consulta registrada', data: conversion })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

exports.registerConversion = async (userId, cryptoId, amount) => {
    const { brl, usd } = await getConversion(cryptoId);

    return await conversionRepository.registerConversion({
        userId,
        cryptoId,
        amount,
        brl: brl * amount,
        usd: usd * amount,
    });
};

exports.historyConversion = async (req, res) => {
    try {
        const history = await conversionService.historyConversion(req.user.id);

        return res.status(200).json({ message: 'Histórico: ', data: history })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}