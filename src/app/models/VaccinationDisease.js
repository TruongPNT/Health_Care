const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaccinationDisease = new Schema(
    {
        name: { type: 'string', maxLength: 255, require: true },
        description: { type: 'string', maxLength: 255, require: true },
    },
    {
        collection: 'vaccinationDisease',
    },
);

module.exports = mongoose.model('vaccinationDisease', VaccinationDisease);
