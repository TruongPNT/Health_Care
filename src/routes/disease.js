const express = require('express');
const router = express.Router();

const DiseaseController = require('../app/controllers/DiseaseController');

//@router lấy id của bệnh cần sửa và gửi lên form sửa
router.get('/:id/edit', DiseaseController.edit);

//@router sửa bênh
router.put('/:id', DiseaseController.update);

//@router delete
router.delete('/:id', DiseaseController.destroy);

// TEST @router createDV
router.post('/createDV', DiseaseController.createDV);

//@router create
router.post('/create', DiseaseController.create);

//@router bênh theo role
router.get('/:role', DiseaseController.showDiseaseByRole);

//@router lấy tất cả bệnh
router.get('/', DiseaseController.showAll);

module.exports = router;
