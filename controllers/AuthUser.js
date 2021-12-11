const User = require('../models/AuthUser');
const jwt = require('jsonwebtoken');


const Register = async (req, res) => {
    const { username, surname, email, password, dateOfBirth } = req.body;

    const user = new User({
        username, surname, email, password, dateOfBirth
    })

    await user.save( (err, usr) => {
        err && res.status(500).send(err.message)
        
        res.status(200).json(usr)
    })  
}

const Login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    console.log(user);

    try {
        if(user) {
            if( password === user.password ){

                const payload = {
                    email: user.email,
                    password: user.password,
                    check:  true
                };
                
                const token = jwt.sign(payload, 'secret')
                console.log(token);
                
                console.log(res);
                
                res.status(200).json({
                    status: 'ok',
                    token
                });
            }else{
                res.status(404).json({
                    status: 'Error',
                    message: 'Password not found'
                });

            }
            
            
        } else {
            res.status(404).json({
                status: 'Error',
                message: 'User not found'
            });
        };

    } catch(err) {
    };
    
}

const getUsers = async (req, res) => {
    User.find( (err, usrs) => {
        err && res.status(500).json({message: 'Ha ocurrido un error'})
        res.status(200).json(usrs)
    })
} 

module.exports = { Register, Login, getUsers }