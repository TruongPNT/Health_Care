const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Vaccine = new Schema({
    name : {type: 'string', maxLength:255, require:true},
    description: {type:'string', maxLength:255},
    factory : {type: 'string', maxLength:255}
    
},{ 
    timestamps : true,
    collection : 'vaccine' 
});


module.exports = mongoose.model('vaccine', Vaccine);
