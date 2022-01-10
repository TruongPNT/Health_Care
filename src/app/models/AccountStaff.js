const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountStaff = new Schema(
    {
        username: {
            type: 'string',
            maxLength: 255,
            require: true,
            unique: true,
        },
        password: {
            type: 'string',
            maxLength: 255,
            require: true,
        },
        staff_id: {
            type: Schema.Types.ObjectId,
            ref: 'health_facilities_staff',
        },
    },
    {
        collection: 'accountStaff',
    },
);

module.exports = mongoose.model('accountStaff', AccountStaff);
