const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const City = new Schema(
    {
        name: { type: 'string', maxLength: 255, require: true, unique: true },
    },
    {
        collection: 'city',
    },
);

module.exports = mongoose.model('city', City);
