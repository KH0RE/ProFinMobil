;

'use stric'
require('dotenv').config();
const  express  = require('express'),
       app = express(),
       morgan = require('morgan'),
       cors  = require('cors'),
      connetDb = require('../db/data'),
      bodyParser = require('body-parser'),
      { appConfig, db } = require('../config'),
      us = require('../routes/usuarios'),
      person = require('../routes/person') 
      connetDb(db);
       
app.use(morgan('dev')),

corsOptions = {
    origin: 'http://192.168.1.7:5000',
    optionsSuccessStatus: 200
}

//app.use(express.urlencoded({extended: false})),

app.use(bodyParser.json({
    limit: '10mb'
})),
app.use(bodyParser.urlencoded({ extended: true, 
    limit: '10mb',
    parameterLimit: 10000
})),
//app.use('/imagenes', express.static(path.resolve('imagenes'))),


app.use(cors (corsOptions)),
app.use(cors()),

app.use('/api', us),
app.use('/api', person)

module.exports = app;