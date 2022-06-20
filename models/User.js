const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Por favor introduzca su Email']
    },
    firstName: {
        type: String,
        required: [true, 'Por favor introduzca su Nombre']
    },
    lastName: {
        type: String,
        required: [true, 'Por favor introduzca su Apellido']
    },
    password: {
        type: String,
        required: [true, 'Por favor introduzca su Clave']
    }
})

module.exports = mongoose.model('User', UserSchema)