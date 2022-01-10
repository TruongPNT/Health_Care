const User = require('../models/User');

class UserController {
    //[GET] /user/
    // hiển thị tất cả các người dùng
    showAll(req, res, next) {
        User.find({})
            .populate('ward_id')
            .populate('district_id')
            .populate('city_id')
            .populate('role_id')
            .then((users) => {
                res.json(users);
            })
            .catch(next);
    }

    //[Get] /user/:id
    //hiển thị người dùng theo id
    showUserById(req, res, next) {
        User.find({ _id: req.params.id })
            .populate('ward_id')
            .populate('district_id')
            .populate('city_id')
            .populate('role_id')
            .then((users) => {
                res.json(users);
            })
            .catch(next);
    }

    // [POST] /user/create
    // thực hiện việc thêm mới người dùng vào data base
    create(req, res, next) {
        const formData = req.body;
        const user = new User(formData);
        user.save()
            .then(() => res.redirect('/user'))
            .catch(next);
    }

    // [PUT] /user/update
    // thực hiện việc sửa thông tin người dùng
    update(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/user'))
            .catch(next);
    }

    //[DELETE] /user/:id
    // xóa người dùng
    destroy(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/user'))
            .catch(next);
    }
}

module.exports = new UserController();
