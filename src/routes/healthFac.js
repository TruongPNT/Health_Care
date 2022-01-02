const express = require('express');
const router = express.Router();

const HealthFacController = require('../app/controllers/Health_facilitiesController');

//@router lấy id của cơ sở ý tế cần sửa và gửi lên form sửa
router.get('/:id/edit', HealthFacController.edit);

//@router sửa cơ sở y tế
router.put('/:id', HealthFacController.update);

//@router delete
router.delete('/:id', HealthFacController.destroy);

//@router create
router.post('/create', HealthFacController.create);

//@router cơ sở y tế theo role
router.get('/:role', HealthFacController.showDiseaseByRole);

//@router lấy tất cả cơ sở ý tế
router.get('/', HealthFacController.showAll);

module.exports = router;
