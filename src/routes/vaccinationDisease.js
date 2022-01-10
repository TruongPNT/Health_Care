const express = require('express');
const router = express.Router();

const VcDiseaseController = require('../app/controllers/VcDiseaseController');

//@router lấy id của bệnh cần tiêm vaccine cần sửa và gửi lên form sửa
router.get('/:id/edit', VcDiseaseController.edit);

//@router sửa bênh cần tiêm vaccine
router.put('/:id', VcDiseaseController.update);

//@router delete
router.delete('/:id', VcDiseaseController.destroy);

//@router create
router.post('/create', VcDiseaseController.create);

//@router lấy tất cả bệnh cần tiêm vaccine
router.get('/', VcDiseaseController.showAll);

module.exports = router;
