const VcDisease = require('../models/VaccinationDisease');
const { mongooseToObject } = require('../../util/mongoose');

class VcDiseaseController {
    //[GET] getAllVcDisease
    // hiển thị tất cả các bệnh
    showAll(req, res, next) {
        VcDisease.find({})
            .then((Vcdiseases) => {
                res.json(Vcdiseases);
            })
            .catch(next);
    }

    // [POST] /Vcdisease/create
    // thực hiện việc thêm mới bệnh vào data base
    create(req, res, next) {
        const formData = req.body;
        const Vcdisease = new VcDisease(formData);
        Vcdisease.save()
            .then(() => res.redirect('/Vcdisease'))
            .catch(next);
    }

    // [GET] /Vcdisease/:id/edit
    // lấy thông tin bệnh cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        VcDisease.findById(req.params.id)
            .then((Vcdiseases) => {
                res.json(Vcdiseases);
            })
            .catch(next);
    }

    //[PUT] /Vcdisease/:id
    // sửa bệnh sau đó thành công thì quay lại trang hiển thị danh sách bệnh
    update(req, res, next) {
        VcDisease.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/Vcdisease'))
            .catch(next);
    }

    //[DELETE] /Vcdisease/:id
    // xóa bệnh
    destroy(req, res, next) {
        VcDisease.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/Vcdisease'))
            .catch(next);
    }
}

module.exports = new VcDiseaseController();
