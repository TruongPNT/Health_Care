const AccountHealthFac = require('../models/AccountHealthFac');
const Role = require('../models/Role');
const Ward = require('../models/Ward');
const City = require('../models/City');
const District = require('../models/District');
const HealthFac = require('../models/Health_facilities');

class AccountHealthFacController {
    //[GET] getAllAccount
    // hiển thị tất cả các account
    showAll(req, res, next) {
        AccountHealthFac.find({})
            .populate({
                path: 'healthFac_id',
                populate: [
                    {
                        path: 'ward_id',
                        model: Ward,
                    },
                    {
                        path: 'district_id',
                        model: District,
                    },
                    {
                        path: 'city_id',
                        model: City,
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
    getAccountHealthFacById(req, res, next) {
        AccountHealthFac.findById(req.params.id)
            .populate({
                path: 'healthFac_id',
                populate: [
                    {
                        path: 'ward_id',
                        model: Ward,
                    },
                    {
                        path: 'district_id',
                        model: District,
                    },
                    {
                        path: 'city_id',
                        model: City,
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
        const {
            name,
            phoneNumber,
            email,
            address,
            ward_id,
            district_id,
            city_id,
            role_id,
        } = formData;
        const healthFac = new HealthFac({
            name,
            phoneNumber,
            email,
            address,
            ward_id,
            district_id,
            city_id,
            role_id,
        });
        healthFac.save();

        const accountHealthFac = new AccountHealthFac({
            username,
            password,
            healthFac_id: healthFac._id,
        });
        accountHealthFac
            .save()
            .then(() => res.redirect('/accountHealthFac'))
            .catch(next);
    }

    // [GET] /account/:id/edit
    // lấy thông tin account cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        AccountHealthFac.findById(req.params.id)
            .populate({
                path: 'healthFac_id',
                populate: [
                    {
                        path: 'ward_id',
                        model: Ward,
                    },
                    {
                        path: 'district_id',
                        model: District,
                    },
                    {
                        path: 'city_id',
                        model: City,
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

    //[PUT] /account/:id
    // sửa account sau đó thành công thì quay lại trang hiển thị danh sách account
    update(req, res, next) {
        AccountHealthFac.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/accountHealthFac'))
            .catch(next);
    }

    //[DELETE] /account/:id
    // xóa account
    destroy(req, res, next) {
        AccountHealthFac.findById(req.params.id)
            .then((accountHealthFac) => {
                HealthFac.deleteOne({ _id: accountHealthFac._id })
                    .then(() => {
                        return accountHealthFac;
                    })
                    .then((accountHealthFac) => {
                        AccountHealthFac.deleteOne({
                            _id: accountHealthFac._id,
                        }).then(() => {
                            res.redirect('/accountHealthFac');
                        });
                    });
            })
            .catch(next);
    }
}

module.exports = new AccountHealthFacController();
