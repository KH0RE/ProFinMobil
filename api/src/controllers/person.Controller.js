;
'use strict'

const Persons = require ('../models/person'),
      path  = require('path'),
      { Object } = require('mongodb')
      
      
async function createPerson(req, res) {
    const person = req.body
    
    try {
        const user = await Persons.create(person)
        res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({
            message: 'No se puede crear',
            error
        })
    }
}


async function recuperarPerson(req, res){
    try{
        const person =  await Persons.find()
            res.json(person)
            
    }catch(error){
        return res.status(400).json({
            message: "No se pudo recuperar los datos",
            error

        })
    }
}


module.exports = {
    createPerson,
    recuperarPerson
}