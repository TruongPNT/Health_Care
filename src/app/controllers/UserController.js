const User = require('../models/Users');
const { mongooseToObject } = require('../../util/mongoose');

class UserController {

    //[GET] /user/
    // hiển thị tất cả các người dùng
    showAll(req, res, next) {
        User.find({})
            .then(users => {
                res.json(users);
            })
            .catch(next);
    }

    //[Get] /user/:role
    //hiển thị người dùng theo role
    showUserByRole(req, res, next) {
        User.find({role: req.params.role})
            .then(users => {
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

    // [GET] /user/:id/edit
    // lấy thông tin người dùng cần sửa theo id và ném lên trang edit 
    edit(req, res, next) {
        User.findById(req.params.id)
            .then(users => {
                res.json(users);
            })
            .catch(next);
    }
 
    //[PUT] /user/:id
    // sửa người dùng sau đó thành công thì quay lại trang hiển thị danh sách người dùng
    update(req, res, next) {
        User.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/user'))
            .catch(next);
    }    

    //[DELETE] /user/:id
    // xóa người dùng
    destroy(req, res, next) {
        User.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/user'))
            .catch(next);
    }
}

module.exports = new UserController();
