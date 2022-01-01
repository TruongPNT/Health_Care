const HealthFac = require('../models/Health_facilities');
const { mongooseToObject } = require('../../util/mongoose');

class Health_facilitiesController {

    //[GET] /healthFac/
    // hiển thị tất cả các cơ sở y tế
    showAll(req, res, next) {
        HealthFac.find({})
            .then(healthFac => {
                res.json(healthFac);
            })
            .catch(next);
    }

    //[Get] /healthFac/:role
    //hiển thị bệnh theo role
    showDiseaseByRole(req, res, next) {
        HealthFac.find({role: req.params.role})
            .then(healthFac => {
                res.json(healthFac);
            })
            .catch(next);
    }

    // [POST] /healthFac/create
    // thực hiện việc thêm mới cơ sở y tế vào data base
    create(req, res, next) {
        const formData = req.body;
        const healthFac = new HealthFac(formData);
        healthFac.save()
            .then(() => res.redirect('/healthFac'))
            .catch(next);
    }

    // [GET] /healthFac/:id/edit
    // lấy thông tin cơ sở y tế cần sửa theo id và ném lên trang edit 
    edit(req, res, next) {
        HealthFac.findById(req.params.id)
            .then(healthFac => {
                res.json(healthFac);
            })
            .catch(next);
    }
 
    //[PUT] /healthFac/:id
    // sửa cơ sở y tế sau đó thành công thì quay lại trang hiển thị danh sách cơ sở y tế
    update(req, res, next) {
        HealthFac.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/healthFac'))
            .catch(next);
    }    

    //[DELETE] /healthFac/:id
    // xóa cơ sở y tế
    destroy(req, res, next) {
        HealthFac.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/healthFac'))
            .catch(next);
    }
}

module.exports = new Health_facilitiesController();
