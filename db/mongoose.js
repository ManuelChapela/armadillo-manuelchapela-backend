const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connection.on('open', () => console.log('db conectada'))

async function connectDB(){
    const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/armadillo'
    await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connectDB;