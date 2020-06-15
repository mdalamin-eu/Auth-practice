const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const mongoose=  require('mongoose')

const User = require('./routes/User')
const morgan= require('morgan')
require('dotenv').config();

app.use(morgan());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/v1/user',User);

mongoose.connect(process.env.DATABASE_CLOUD, {useNewUrlParser: true}).then(()=> console.log('DB connected'))
.catch((err)=> console.log(err))

const port = process.env.PORT || 7700;

app.listen(port,()=>{
    console.log(`My server running on ${port}`)
})