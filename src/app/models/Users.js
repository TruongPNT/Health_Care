const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema(
    {
        name: { type: 'string', maxLength: 255, require: true },
        cmnd: { type: 'string', maxLength: 600, require: true, unique: true },
        phoneNumber: {
            type: Number,
            maxLength: 600,
            require: true,
            unique: true,
        },
        dateOfBirth: { type: Date, maxLength: 600 },
        address: { type: 'string', maxLength: 600 },
        ward: { type: 'string', maxLength: 600 },
        district: { type: 'string', maxLength: 600 },
        city: { type: 'string', maxLength: 600 },
        email: { type: 'string', maxLength: 600, require: true, unique: true },
        role: { type: 'string', maxLength: 255 },
    },
    {
        timestamps: true,
        collection: 'users',
    },
);

module.exports = mongoose.model('users', Users);
