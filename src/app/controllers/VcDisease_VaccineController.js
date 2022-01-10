const VcDisease_Vc = require('../models/VaccinationDisease_Vaccine');
const VcDisease = require('../models/VaccinationDisease');
const Vaccine = require('../models/Vaccine');

class VcDisease_VaccineController {
    //[GET] getAllVcDisease
    // hiển thị tất cả các bệnh
    showAll(req, res, next) {
        VcDisease_Vc.find({})
            .populate('vaccine_id')
            .populate('vcDisease_id')
            .then((VcDisease_Vc) => {
                res.json(VcDisease_Vc);
            })
            .catch(next);
    }

    // [POST] /Vcdisease/create
    // thực hiện việc thêm mới bệnh vào data base
    create(req, res, next) {
        const formData = req.body;
        //thêm mới bệnh cần tiêm vaccine
        const vcDisease = new VcDisease({
            name: formData.disease_name,
            description: formData.disease_description,
        });
        vcDisease.save();
        //thêm mới vaccine
        const vaccine = new Vaccine({
            name: formData.vaccine_name,
            description: formData.description_vaccine,
            injection_time: formData.injection_time,
            number_of_injections: formData.number_of_injections,
        });
        vaccine.save();
        // lấy id vaccine và bệnh cần tiêm chủng ở trên r đưa vào bảng VcDisease_Vc
        const Vcdisease_Vc = new VcDisease_Vc({
            vaccine_id: vaccine._id,
            vcDisease_id: vcDisease._id,
        });
        Vcdisease_Vc.save()
            .then(() => res.redirect('/vcDisease_vaccine'))
            .catch(next);
    }

    //[PUT] /Vcdisease_VC/:id
    // sửa bệnh sau đó thành công thì quay lại trang hiển thị danh sách bệnh
    update(req, res, next) {
        const formData = req.body;
        VcDisease_Vc.findById(req.params.id)
            .then((vcDisease_vc) => {
                VcDisease.updateOne(
                    { _id: vcDisease_vc.vcDisease_id },
                    {
                        name: formData.disease_name,
                        description: formData.disease_description,
                    },
                )
                    .then(() => {
                        return vcDisease_vc;
                    })
                    .then((vcDisease_vc) => {
                        Vaccine.updateOne(
                            { _id: vcDisease_vc.vaccine_id },
                            {
                                name: formData.vaccine_name,
                                description: formData.description_vaccine,
                                injection_time: formData.injection_time,
                                number_of_injections:
                                    formData.number_of_injections,
                            },
                        ).then(() => {
                            res.redirect('/vcDisease_vaccine');
                        });
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // [GET] /Vcdisease/:id/edit
    // lấy thông tin bệnh cần sửa theo id và ném lên trang edit
    edit(req, res, next) {
        VcDisease_Vc.findById(req.params.id)
            .populate('vaccine_id')
            .populate('vcDisease_id')
            .then((Vcdiseases) => {
                res.json(Vcdiseases);
            })
            .catch(next);
    }

    //[DELETE] /Vcdisease/:id
    // xóa bệnh
    destroy(req, res, next) {
        VcDisease_Vc.findById(req.params.id)
            .then((vcDisease_Vc) => {
                Vaccine.deleteOne({ _id: vcDisease_Vc.vaccine_id })
                    .then(() => {
                        return vcDisease_Vc;
                    })
                    .then((vcDisease_Vc) => {
                        VcDisease.deleteOne({ _id: vcDisease_Vc.vcDisease_id })
                            .then(() => {
                                return vcDisease_Vc;
                            })
                            .then((vcDisease_Vc) => {
                                VcDisease_Vc.deleteOne({
                                    _id: vcDisease_Vc._id,
                                }).then(() => {
                                    res.redirect('/vcDisease_vaccine');
                                });
                            });
                    });
            })
            .catch(next);
    }
}

module.exports = new VcDisease_VaccineController();
