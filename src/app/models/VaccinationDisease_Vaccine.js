const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VcDisease_vaccine = new Schema(
    {
        vaccine_id: {
            type: Schema.Types.ObjectId,
            ref: 'vaccine',
        },
        vcDisease_id: {
            type: Schema.Types.ObjectId,
            ref: 'vaccinationDisease',
        },
    },
    {
        collection: 'vaccinationDisease_Vaccine',
    },
);

module.exports = mongoose.model(
    'vaccinationDisease_Vaccine',
    VcDisease_vaccine,
);
