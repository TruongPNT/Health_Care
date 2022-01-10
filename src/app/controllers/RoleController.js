const Role = require('../models/Role');

class RoleController {
    //[GET] getAllrole
    // hiển thị tất cả các role
    showAll(req, res, next) {
        Role.find({})
            .then((roles) => {
                res.json(roles);
            })
            .catch(next);
    }

    //[GET] getroleById
    // hiển thị chi tiết role
    getRoleById(req, res, next) {
        Role.findById(req.params.id)
            .then((roles) => {
                res.json(roles);
            })
            .catch(next);
    }

    // [POST] /role/create
    // thực hiện việc thêm mới role vào data base
    create(req, res, next) {
        const formData = req.body;
        const role = new Role(formData);
        role.save()
            .then(() => res.redirect('/role'))
            .catch(next);
    }

    // [GET] /role/:id/edit
    // lấy thông tin role cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        Role.findById(req.params.id)
            .then((roles) => {
                res.json(roles);
            })
            .catch(next);
    }

    //[PUT] /role/:id
    // sửa role sau đó thành công thì quay lại trang hiển thị danh sách role
    update(req, res, next) {
        Role.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/role'))
            .catch(next);
    }

    //[DELETE] /role/:id
    // xóa role
    destroy(req, res, next) {
        Role.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/role'))
            .catch(next);
    }
}

module.exports = new RoleController();
