const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');

app.route('/')
    .get((req,res)=>{res.send('Bem vindo!')});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
});