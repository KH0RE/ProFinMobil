
; 
'use stric'

const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema,
      { model } = require('mongoose')


const PersonSchema = new Schema ({

    name   : String,
    phone : String,
    photo: String,


});



module.exports = model('persons', PersonSchema);