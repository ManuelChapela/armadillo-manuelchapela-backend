const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const UserSchema = Schema({
    username: {
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validateEmail, 'Email no válido']
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        format: Date,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;