const accountUserRouter = require('./accountUser');
const accountStaffRouter = require('./accountStaff');
const accountHealthFacRouter = require('./accountHealthFac');
const cityRouter = require('./city');
const wardRouter = require('./ward');
const districtRouter = require('./district');
const vaccineRouter = require('./vaccine');
const roleRouter = require('./role');
const diseaseRouter = require('./disease');
const VcdiseaseRouter = require('./vaccinationDisease');
const VcDisease_VaccineRouter = require('./vcdisease_Vaccine');
const healthFacRouter = require('./healthFac');
const userRouter = require('./user');
const healthFacStaffRouter = require('./healthFacStaff');
const dkyKhamRouter = require('./dondangkykham')

function route(app) {
    app.use('/accountUser', accountUserRouter); // quản lý account người dùng

    app.use('/accountStaff', accountStaffRouter); // quản lý account của nhân viên y tế

    app.use('/accountHealthFac', accountHealthFacRouter); // quản lý account của cơ sở y tế

    app.use('/staff', healthFacStaffRouter); // ququản lý nhân viên y tế

    app.use('/city', cityRouter); // quản lý thành phố

    app.use('/ward', wardRouter); // quản lý phường / xã

    app.use('/district', districtRouter); // quản lý quận / huyện

    app.use('/vaccine', vaccineRouter); // quản lý vaccine

    app.use('/role', roleRouter); // quản lý quyền

    app.use('/vcDisease_vaccine', VcDisease_VaccineRouter); // quản lý bệnh cần tiêm chủng và vaccine đi kèm

    app.use('/disease', diseaseRouter); // quản lý bệnh của thai sản và bệnh ở trẻ em không cần tiêm chủng

    app.use('/vcDisease', VcdiseaseRouter); // quản lý bệnh cần tiêm chủng

    app.use('/user', userRouter); // quản lý người dùng : thai sản

    app.use('/healthFac', healthFacRouter); // quản lý cơ sở y tế

    app.use('/dondangkykham', dkyKhamRouter); // quản lý đơn đăng ký khám bệnh
}

module.exports = route;
