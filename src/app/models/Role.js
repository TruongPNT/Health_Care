const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Role = new Schema(
    {
        name: { type: 'string', maxLength: 255, require: true, unique: true },
        user_object: { type: 'string', maxLength: 255, require: true },
    },
    {
        collection: 'role',
    },
);

module.exports = mongoose.model('role', Role);
