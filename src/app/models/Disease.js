const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Disease = new Schema(
    {
        name: { type: 'string', maxLength: 255, require: true },
        description: { type: 'string', maxLength: 600 },
        role: {
            type: 'string',
            enum: ['Bệnh trẻ em', 'Bệnh thai sản'],
        },
    },
    {
        collection: 'disease',
    },
);

module.exports = mongoose.model('disease', Disease);
