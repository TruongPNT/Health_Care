const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DkyKham = new Schema(
    {
        status: { type: 'string', maxLength: 255, require: true,
            enum: ['Đang chờ xác nhận', 'Thành công', 'Từ chối'],
        },
        purpose: { type: 'string', maxLength: 255, require: true},
        time: { type: 'string', maxLength: 255, require: true},
        date: { type: Date, maxLength: 255, require: true},
        user_id: {
            type : Schema.Types.ObjectId,
            ref: 'user'
        },
        healthFac_id: {
            type : Schema.Types.ObjectId,
            ref: 'health_facilities'
        },
    },
    {
        collection: 'dangkykham',
    }
);

module.exports = mongoose.model('dangkykham', DkyKham);
