const City = require('../models/City');

class CityController {
    //[GET] getAllcity
    // hiển thị tất cả các city
    showAll(req, res, next) {
        City.find({})
            .then((cities) => {
                res.json(cities);
            })
            .catch(next);
    }

    //[GET] getcityById
    // hiển thị chi tiết city
    getCityById(req, res, next) {
        City.findById(req.params.id)
            .then((cities) => {
                res.json(cities);
            })
            .catch(next);
    }

    // [POST] /city/create
    // thực hiện việc thêm mới city vào data base
    create(req, res, next) {
        const formData = req.body;
        const city = new City(formData);
        city.save()
            .then(() => res.redirect('/city'))
            .catch(next);
    }

    // [GET] /city/:id/edit
    // lấy thông tin city cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        City.findById(req.params.id)
            .then((cities) => {
                res.json(cities);
            })
            .catch(next);
    }

    //[PUT] /city/:id
    // sửa city sau đó thành công thì quay lại trang hiển thị danh sách city
    update(req, res, next) {
        City.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/city'))
            .catch(next);
    }

    //[DELETE] /city/:id
    // xóa city
    destroy(req, res, next) {
        City.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/city'))
            .catch(next);
    }
}

module.exports = new CityController();
