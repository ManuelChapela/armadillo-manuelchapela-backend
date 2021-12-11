require('dotenv').config({path: './.env'});
const PORT = process.env.PORT || 5000;
const DOMAIN = process.env.DOMAIN || 'http://localhost:5000';


// Imports
const express = require("express");
const cors = require('cors');
const connectDB = require('./db/mongoose');
const app = express()


// Routes
const authUser_Routes = require('./routes/AuthUser')

//Cors
const corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: [
    "x-auth-token",
    "content-type",
    "X-Requested-With",
    "Authorization",
    "Accept",
    "Origin",
  ],
};

//Options
app.use(cors(corsOption));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authUser_Routes);

connectDB();
app.listen( PORT, () => {
  console.log(`Server listening at port ${DOMAIN}`);
});