const authRepository = require('../repositories/authRepository')
const bcrypt = require('bcrypt')

exports.registerUser = async (name, email, password) => {
    const salt = await bcrypt.genSalt(12)
    const passwordCrypt = await bcrypt.hash(password, salt)

    const newUser = {
        name,
        email,
        password: passwordCrypt,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }

    return await authRepository.login(newUser);
}

exports.loginUser = async (email, password) => {
    const user = await authRepository.login(email);

    if(!user){
        throw new Error("Credenciais incorretas");
    }
    
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword){
        throw new Error("Credenciais incorretas");
    }

    return user;
}