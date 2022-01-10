const Ward = require('../models/Ward');

class WardController {
    //[GET] getAllward
    // hiển thị tất cả các ward
    showAll(req, res, next) {
        Ward.find({})
            .then((wards) => {
                res.json(wards);
            })
            .catch(next);
    }

    //[GET] getwardById
    // hiển thị chi tiết ward
    getWardById(req, res, next) {
        Ward.findById(req.params.id)
            .then((wards) => {
                res.json(wards);
            })
            .catch(next);
    }

    // [POST] /ward/create
    // thực hiện việc thêm mới ward vào data base
    create(req, res, next) {
        const formData = req.body;
        const ward = new Ward(formData);
        ward.save()
            .then(() => res.redirect('/ward'))
            .catch(next);
    }

    // [GET] /ward/:id/edit
    // lấy thông tin ward cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        Ward.findById(req.params.id)
            .then((wards) => {
                res.json(wards);
            })
            .catch(next);
    }

    //[PUT] /ward/:id
    // sửa ward sau đó thành công thì quay lại trang hiển thị danh sách ward
    update(req, res, next) {
        Ward.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/ward'))
            .catch(next);
    }

    //[DELETE] /city/:id
    // xóa city
    destroy(req, res, next) {
        Ward.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/ward'))
            .catch(next);
    }
}

module.exports = new WardController();
