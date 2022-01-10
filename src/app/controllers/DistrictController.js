const District = require('../models/District');

class DistrictController {
    //[GET] getAlldistrict
    // hiển thị tất cả các district
    showAll(req, res, next) {
        District.find({})
            .then((districts) => {
                res.json(districts);
            })
            .catch(next);
    }

    //[GET] getdistrictById
    // hiển thị chi tiết district
    getDistrictById(req, res, next) {
        District.findById(req.params.id)
            .then((districts) => {
                res.json(districts);
            })
            .catch(next);
    }

    // [POST] /district/create
    // thực hiện việc thêm mới district vào data base
    create(req, res, next) {
        const formData = req.body;
        const district = new District(formData);
        district
            .save()
            .then(() => res.redirect('/district'))
            .catch(next);
    }

    // [GET] /district/:id/edit
    // lấy thông tin district cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        District.findById(req.params.id)
            .then((districts) => {
                res.json(districts);
            })
            .catch(next);
    }

    //[PUT] /district/:id
    // sửa district sau đó thành công thì quay lại trang hiển thị danh sách district
    update(req, res, next) {
        District.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/district'))
            .catch(next);
    }

    //[DELETE] /city/:id
    // xóa city
    destroy(req, res, next) {
        District.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/district'))
            .catch(next);
    }
}

module.exports = new DistrictController();
