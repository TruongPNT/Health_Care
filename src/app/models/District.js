const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const District = new Schema(
    {
        name: { type: 'string', maxLength: 255, require: true, unique: true },
    },
    {
        collection: 'district',
    },
);

module.exports = mongoose.model('district', District);
