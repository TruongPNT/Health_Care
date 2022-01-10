const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema(
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
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    {
        collection: 'account',
    },
);

module.exports = mongoose.model('account', Account);
