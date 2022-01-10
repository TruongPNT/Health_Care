const express = require('express');
const router = express.Router();

const VcDisease_vaccineController = require('../app/controllers/VcDisease_VaccineController');

//@router lấy id của bệnh cần sửa và gửi lên form sửa
router.get('/:id/edit', VcDisease_vaccineController.edit);

//@router sửa bênh
router.put('/:id', VcDisease_vaccineController.update);

//@router delete
router.delete('/:id', VcDisease_vaccineController.destroy);

//@router create
router.post('/create', VcDisease_vaccineController.create);

//@router lấy tất cả bệnh
router.get('/', VcDisease_vaccineController.showAll);

module.exports = router;
