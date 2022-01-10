const express = require('express');
const router = express.Router();

const dkyKhamController = require('../app/controllers/DkyKhamController');

//@router lấy id của nhân viên y tế cần sửa và gửi lên form sửa
// router.get('/:id/edit', staffController.edit);

//@router sửa nhân viên y tế
router.put('/:id', dkyKhamController.update);

//@router delete
router.delete('/:id', dkyKhamController.destroy);

//@router findById
router.get('/:id', dkyKhamController.getDkiKhamById);

//@router create
router.post('/create', dkyKhamController.create);

//@router lấy tất cả nhân viên y tế
router.get('/', dkyKhamController.showAll);

module.exports = router;
