const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Health_facilities = new Schema({
    name : {type: 'string', maxLength:255, require:true},
    phoneNumber: {type: Number, maxLength:600, require:true},
    address : {type: 'string', maxLength:600, require:true},
    ward : {type: 'string', maxLength:600, require:true},
    district : {type: 'string', maxLength:600, require:true},
    city : {type: 'string', maxLength:600, require:true},
    role: {type:'string', maxLength:255, require:true},
    maCS: {type:'string', maxLength:255, require:true, unique:true},
    
},{ 
    timestamps : true,
    collection : 'health_facilities' 
});


module.exports = mongoose.model('health_facilities', Health_facilities);
