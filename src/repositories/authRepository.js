const User = require('../models/User')

exports.register = async (user) => {
    try {
        const newUser = new User(user)
        await newUser.save()

        return newUser;
        
    } catch (error) {
        throw new Error('Erro ao registrar usuário: ' + error.message);
    }
}

exports.login = async (email) => {
    try {
        const user = await User.findOne({ where: { email } })

        if (!user){
            throw new Error('Usuário não encontrado')
        }

        return user;

    } catch (error) {
        throw new Error('Erro ao logar com usuário: ' + error.message);
    }
}