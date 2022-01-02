const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@healthy-care.m0lhn.mongodb.net/Health_care', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect faile!!!');
    }
}

module.exports = { connect };
