const express = require('express');
const router = express.Router();

const VaccineRouter = require('../app/controllers/VaccineController');

//@router lấy id của bệnh cần sửa và gửi lên form sửa
router.get('/:id/edit', VaccineRouter.edit);

//@router sửa bênh
router.put('/:id', VaccineRouter.update);

//@router delete
router.delete('/:id', VaccineRouter.destroy);

//@router create
router.post('/create', VaccineRouter.create);

//@router lấy tất cả bệnh
router.get('/', VaccineRouter.showAll);

module.exports = router;
