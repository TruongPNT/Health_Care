const Disease = require('../models/Disease');
const { mongooseToObject } = require('../../util/mongoose');

class DiseaseController {
    //[GET] getAllDisease
    // hiển thị tất cả các bệnh
    showAll(req, res, next) {
        Disease.find({})
            .then((diseases) => {
                res.json(diseases);
            })
            .catch(next);
    }

    //[Get] /disease/:role
    //hiển thị bệnh theo role
    showDiseaseByRole(req, res, next) {
        Disease.find({ role: req.params.role })
            .then((diseases) => {
                res.json(diseases);
            })
            .catch(next);
    }

    // [POST] /disease/create
    // thực hiện việc thêm mới bệnh vào data base
    create(req, res, next) {
        const formData = req.body;
        const disease = new Disease(formData);
        disease
            .save()
            .then(() => res.redirect('/disease'))
            .catch(next);
    }

    // [GET] /disease/:id/edit
    // lấy thông tin bệnh cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        Disease.findById(req.params.id)
            .then((diseases) => {
                res.json(diseases);
            })
            .catch(next);
    }

    //[PUT] /disease/:id
    // sửa bệnh sau đó thành công thì quay lại trang hiển thị danh sách bệnh
    update(req, res, next) {
        Disease.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/disease'))
            .catch(next);
    }

    //[DELETE] /disease/:id
    // xóa bệnh
    destroy(req, res, next) {
        Disease.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/disease'))
            .catch(next);
    }
}

module.exports = new DiseaseController();
