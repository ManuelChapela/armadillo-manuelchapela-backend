const express = require('express')
const route = express.Router();
const { Login, Register, getUsers } = require('../controllers/AuthUser');

route.post('/user/register', Register);
route.post('/user/login', Login);
route.get('/users', getUsers);

module.exports = route;

