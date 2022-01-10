const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Health_facilities = new Schema(
    {
        name: { type: 'string', maxLength: 255, require: true },
        phoneNumber: { type: Number, maxLength: 600, require: true },
        address: { type: 'string', maxLength: 600, require: true },
        email: { type: 'string', maxLength: 600, require: true },
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
        collection: 'health_facilities',
    },
);

module.exports = mongoose.model('health_facilities', Health_facilities);
