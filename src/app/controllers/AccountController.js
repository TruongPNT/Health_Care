const Account = require('../models/Account');
const { mongooseToObject } = require('../../util/mongoose');

class AccountController {
    //[GET] getAllAccount
    // hiển thị tất cả các account
    showAll(req, res, next) {
        Account.find({})
            .then((accounts) => {
                res.json(accounts);
            })
            .catch(next);
    }

    // [POST] /account/create
    // thực hiện việc thêm mới account vào data base
    create(req, res, next) {
        const formData = req.body;
        const account = new Account(formData);
        account
            .save()
            .then(() => res.redirect('/account'))
            .catch(next);
    }

    // [GET] /account/:id/edit
    // lấy thông tin account cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        Account.findById(req.params.id)
            .then((accounts) => {
                res.json(accounts);
            })
            .catch(next);
    }

    //[PUT] /account/:id
    // sửa account sau đó thành công thì quay lại trang hiển thị danh sách account
    update(req, res, next) {
        Account.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/account'))
            .catch(next);
    }

    //[DELETE] /account/:id
    // xóa account
    destroy(req, res, next) {
        Account.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/account'))
            .catch(next);
    }
}

module.exports = new AccountController();
