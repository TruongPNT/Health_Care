const AccountUser = require('../models/AccountUser');
const Role = require('../models/Role');
const Ward = require('../models/Ward');
const City = require('../models/City');
const District = require('../models/District');
const User = require('../models/User');

class AccountUserController {
    //[GET] getAllAccount
    // hiển thị tất cả các account
    showAll(req, res, next) {
        AccountUser.find({})
            .populate({
                path: 'user_id',
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
    getAccountById(req, res, next) {
        AccountUser.findById(req.params.id)
            .populate({
                path: 'user_id',
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
            full_name,
            cmnd,
            phoneNumber,
            email,
            dateOfBirth,
            address,
            ward_id,
            district_id,
            city_id,
            role_id,
        } = formData;
        const user = new User({
            full_name,
            cmnd,
            phoneNumber,
            email,
            dateOfBirth,
            address,
            ward_id,
            district_id,
            city_id,
            role_id,
        });
        user.save();

        const accountUser = new AccountUser({
            username,
            password,
            user_id: user._id,
        });
        accountUser
            .save()
            .then(() => res.redirect('/accountUser'))
            .catch(next);
    }

    // [GET] /account/:id/edit
    // lấy thông tin account cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        AccountUser.findById(req.params.id)
            .populate({
                path: 'user_id',
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
            .then((accountUsers) => {
                res.json(accountUsers);
            })
            .catch(next);
    }

    //[PUT] /account/:id
    // sửa account sau đó thành công thì quay lại trang hiển thị danh sách account
    update(req, res, next) {
        AccountUser.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/accountUser'))
            .catch(next);
    }

    //[DELETE] /account/:id
    // xóa account
    destroy(req, res, next) {
        AccountUser.findById(req.params.id)
            .then((accountUser) => {
                User.deleteOne({ _id: accountUser.user_id })
                    .then(() => {
                        return accountUser;
                    })
                    .then((accountUser) => {
                        AccountUser.deleteOne({ _id: accountUser._id }).then(
                            () => {
                                res.redirect('/accountUser');
                            },
                        );
                    });
            })
            .catch(next);
    }
}

module.exports = new AccountUserController();
