const Vaccine = require('../models/Vaccine');
const { mongooseToObject } = require('../../util/mongoose');

class VaccineController {

    //[GET] getAllDisease
    // hiển thị tất cả các vaccine
    showAll(req, res, next) {
        Vaccine.find({})
            .then(vaccines => {
                res.json(vaccines);
            })
            .catch(next);
    }

    // [POST] /disease/create
    // thực hiện việc thêm mới vaccine vào data base
    create(req, res, next) {
        const formData = req.body;
        const vaccine = new Vaccine(formData);
        vaccine.save()
            .then(() => res.redirect('/vaccine'))
            .catch(next);
    }

    // [GET] /disease/:id/edit
    // lấy thông tin vaccine cần sửa theo id và ném lên trang edit 
    edit(req, res, next) {
        Vaccine.findById(req.params.id)
            .then(vaccines => {
                res.json(vaccines);
            })
            .catch(next);
    }
 
    //[PUT] /disease/:id
    // sửa vaccine sau đó thành công thì quay lại trang hiển thị danh sách vaccine
    update(req, res, next) {
        Vaccine.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/vaccine'))
            .catch(next);
    }    

    //[DELETE] /disease/:id
    // xóa vaccine
    destroy(req, res, next) {
        Vaccine.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/vaccine'))
            .catch(next);
    }
}

module.exports = new VaccineController();
