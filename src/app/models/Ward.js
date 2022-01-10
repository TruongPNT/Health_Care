const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ward = new Schema(
    {
        name: { type: 'string', maxLength: 255, require: true, unique: true },
    },
    {
        collection: 'ward',
    },
);

module.exports = mongoose.model('ward', Ward);
