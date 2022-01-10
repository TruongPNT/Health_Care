const Staff = require('../models/Health_facilities_staff');

class StaffController {
    //[GET] /user/
    // hiển thị tất cả các người dùng
    showAll(req, res, next) {
        Staff.find({})
            .populate('health_facilities_id')
            .populate('role_id')
            .then((staffs) => {
                res.json(staffs);
            })
            .catch(next);
    }

    //[Get] /user/:id
    //hiển thị người dùng theo id
    getStaffById(req, res, next) {
        Staff.find({ _id: req.params.id })
            .populate('health_facilities_id')
            .populate('role_id')
            .then((staffs) => {
                res.json(staffs);
            })
            .catch(next);
    }

    // [POST] /user/create
    // thực hiện việc thêm mới người dùng vào data base
    create(req, res, next) {
        const formData = req.body;
        const staff = new Staff(formData);
        staff
            .save()
            .then(() => res.redirect('/staff'))
            .catch(next);
    }

    // [PUT] /user/update
    // thực hiện việc sửa thông tin người dùng
    update(req, res, next) {
        Staff.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/staff'))
            .catch(next);
    }

    //[DELETE] /user/:id
    // xóa người dùng
    destroy(req, res, next) {
        Staff.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/staff'))
            .catch(next);
    }
}

module.exports = new StaffController();
