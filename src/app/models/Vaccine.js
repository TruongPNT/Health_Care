const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vaccine = new Schema(
    {
        name: { type: 'string', maxLength: 255, require: true },
        description: { type: 'string', maxLength: 255 },
        injection_time: { type: 'string', maxLength: 255, require: true },
        number_of_injections: { type: 'number' },
    },
    {
        collection: 'vaccine',
    },
);

module.exports = mongoose.model('vaccine', Vaccine);
