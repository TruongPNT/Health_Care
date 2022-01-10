const Dangkykham = require('../models/DkyKham');
const Role = require('../models/Role');
const Ward = require('../models/Ward');
const City = require('../models/City');
const District = require('../models/District');



class DkyKhamController {
    //[GET] /user/
    // hiển thị tất cả các đơn đăng ký khám
    showAll(req, res, next) {
        Dangkykham.find({})
            .populate({
                path:'healthFac_id',
                populate: [
                    {
                        path: 'ward_id',
                        model: Ward,
                    },
                    {
                        path: 'district_id',
                        model: District,
                    },
                    {
                        path: 'city_id',
                        model: City,
                    },
                    {
                        path: 'role_id',
                        model: Role,
                    },
                ]
            })
            .populate({
                path: 'user_id',
                populate: [
                    {
                        path: 'ward_id',
                        model: Ward,
                    },
                    {
                        path: 'district_id',
                        model: District,
                    },
                    {
                        path: 'city_id',
                        model: City,
                    },
                    {
                        path: 'role_id',
                        model: Role,
                    },
                ],
            })
            .then((dangkykham) => {
                res.json(dangkykham);
            })
            .catch(next);
    }

    //[Get] /user/:id
    //hiển thị đơn đăng ký khám theo id
    getDkiKhamById(req, res, next) {
        Dangkykham.find({ _id: req.params.id })
            .populate({
                path:'healthFac_id',
                populate: [
                    {
                        path: 'ward_id',
                        model: Ward,
                    },
                    {
                        path: 'district_id',
                        model: District,
                    },
                    {
                        path: 'city_id',
                        model: City,
                    },
                    {
                        path: 'role_id',
                        model: Role,
                    },
                ]
            })
            .populate({
                path: 'user_id',
                populate: [
                    {
                        path: 'ward_id',
                        model: Ward,
                    },
                    {
                        path: 'district_id',
                        model: District,
                    },
                    {
                        path: 'city_id',
                        model: City,
                    },
                    {
                        path: 'role_id',
                        model: Role,
                    },
                ],
            })
            .then((dangkykham) => {
                res.json(dangkykham);
            })
            .catch(next);
    }

    // [POST] /user/create
    // thực hiện việc thêm mới đơn đăng ký khám vào data base
    create(req, res, next) {
        const formData = req.body;
        const dangkykham = new Dangkykham(formData);
        dangkykham
            .save()
            .then(() => res.redirect('/dondangkykham'))
            .catch(next);
    }

    // [PUT] /user/update
    // thực hiện việc sửa thông tin đơn đăng ký khám
    update(req, res, next) {
        Dangkykham.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/dondangkykham'))
            .catch(next);
    }

    //[DELETE] /user/:id
    // xóa đơn đăng ký khám
    destroy(req, res, next) {
        Dangkykham.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/dondangkykham'))
            .catch(next);
    }
}

module.exports = new DkyKhamController();
