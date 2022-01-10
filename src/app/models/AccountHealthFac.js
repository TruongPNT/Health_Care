const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountHealthFac = new Schema(
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
        healthFac_id: {
            type: Schema.Types.ObjectId,
            ref: 'health_facilities',
        },
    },
    {
        collection: 'accountHealthFac',
    },
);

module.exports = mongoose.model('accountHealthFac', AccountHealthFac);
