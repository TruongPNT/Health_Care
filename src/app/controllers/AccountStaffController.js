const AccountStaff = require('../models/AccountStaff');
const Role = require('../models/Role');
const HealthFac = require('../models/Health_facilities');
const HealthFacStaff = require('../models/Health_facilities_staff');

class AccountStaffController {
    //[GET] getAllAccount
    // hiển thị tất cả các account
    showAll(req, res, next) {
        AccountStaff.find({})
            .populate({
                path: 'staff_id',
                populate: [
                    {
                        path: 'health_facilities_id',
                        model: HealthFac,
                    },
                    {
                        path: 'role_id',
                        model: Role,
                    },
                ],
            })
            .then((accounts) => {
                res.json(accounts);
            })
            .catch(next);
    }

    //[GET] getAccountById
    // hiển thị chi tiết account
    getAccountById(req, res, next) {
        AccountStaff.findById(req.params.id)
            .populate({
                path: 'staff_id',
                populate: [
                    {
                        path: 'health_facilities_id',
                        model: HealthFac,
                    },
                    {
                        path: 'role_id',
                        model: Role,
                    },
                ],
            })
            .then((accounts) => {
                res.json(accounts);
            })
            .catch(next);
    }

    // [POST] /account/create
    // thực hiện việc thêm mới account vào data base
    create(req, res, next) {
        const formData = req.body;
        const { username, password } = formData;
        const { full_name, phoneNumber, email, health_facilities_id, role_id } =
            formData;
        const staff = new HealthFacStaff({
            full_name,
            phoneNumber,
            email,
            health_facilities_id,
            role_id,
        });
        staff.save();

        const accountStaff = new AccountStaff({
            username,
            password,
            staff_id: staff._id,
        });
        accountStaff
            .save()
            .then(() => res.redirect('/accountStaff'))
            .catch(next);
    }

    // [GET] /account/:id/edit
    // lấy thông tin account cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        AccountStaff.findById(req.params.id)
            .populate({
                path: 'staff_id',
                populate: [
                    {
                        path: 'health_facilities_id',
                        model: HealthFac,
                    },
                    {
                        path: 'role_id',
                        model: Role,
                    },
                ],
            })
            .then((accountStaff) => {
                res.json(accountStaff);
            })
            .catch(next);
    }

    //[PUT] /account/:id
    // sửa account sau đó thành công thì quay lại trang hiển thị danh sách account
    update(req, res, next) {
        AccountStaff.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/accountStaff'))
            .catch(next);
    }

    //[DELETE] /account/:id
    // xóa account
    destroy(req, res, next) {
        AccountStaff.findById(req.params.id)
            .then((accountStaff) => {
                HealthFacStaff.deleteOne({ _id: accountStaff._id })
                    .then(() => {
                        return accountStaff;
                    })
                    .then((accountStaff) => {
                        AccountStaff.deleteOne({ _id: accountStaff._id }).then(
                            () => {
                                res.redirect('/accountStaff');
                            },
                        );
                    });
            })
            .catch(next);
    }
}

module.exports = new AccountStaffController();
