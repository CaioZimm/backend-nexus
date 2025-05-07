const authService = require('../services/authService')
const jwt = require('jsonwebtoken')

exports.registerUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body

    if(password !== confirmPassword){
        return res.status(400).json({ error: 'As senhas não estão iguais.'})
    }

    try {
        const user = await authService.registerUser(name, email, password);
        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, { expiresIn: '1d'});

        return res.status(201).json({ message: 'Usuário criado com sucesso', token, data: user })

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await authService.loginUser(email, password)
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.status(200).json({ message: 'Logado com sucesso', token })

    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
}