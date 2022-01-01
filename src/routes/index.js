const diseaseRouter = require('./disease');
const vaccineRouter = require('./vaccine');
const healthFacRouter = require('./healthFac');
const userRouter = require('./user');
function route(app) {
    app.use('/disease', diseaseRouter);
    // app.use('/auth', authRouter);
    app.use('/user', userRouter);
    app.use('/vaccine', vaccineRouter);
    app.use('/healthFac', healthFacRouter);
}

module.exports = route;
