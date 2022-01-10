const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Health_facilities_staff = new Schema(
    {
        full_name: { type: 'string', maxLength: 255, require: true },
        phoneNumber: {
            type: Number,
            maxLength: 600,
            require: true,
            unique: true,
        },
        email: { type: 'string', maxLength: 600, require: true, unique: true },
        role_id: {
            type: Schema.Types.ObjectId,
            ref: 'role',
        },
        health_facilities_id: {
            type: Schema.Types.ObjectId,
            ref: 'health_facilities',
        },
    },
    {
        collection: 'health_facilities_staff',
    },
);

module.exports = mongoose.model(
    'health_facilities_staff',
    Health_facilities_staff,
);
