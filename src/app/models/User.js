const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        full_name: { type: 'string', maxLength: 255, require: true },
        cmnd: { type: 'string', maxLength: 600, require: true, unique: true },
        phoneNumber: {
            type: Number,
            maxLength: 600,
            require: true,
            unique: true,
        },
        email: { type: 'string', maxLength: 600, require: true, unique: true },
        dateOfBirth: { type: Date, maxLength: 600 },
        address: { type: 'string', maxLength: 600 },
        ward_id: {
            type: Schema.Types.ObjectId,
            ref: 'ward',
        },
        district_id: {
            type: Schema.Types.ObjectId,
            ref: 'district',
        },
        city_id: {
            type: Schema.Types.ObjectId,
            ref: 'city',
        },
        role_id: {
            type: Schema.Types.ObjectId,
            ref: 'role',
        },
    },
    {
        collection: 'user',
    },
);

module.exports = mongoose.model('user', User);
