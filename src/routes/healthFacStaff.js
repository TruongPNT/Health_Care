const express = require('express');
const router = express.Router();

const staffController = require('../app/controllers/HealthFac_StaffController');

//@router lấy id của nhân viên y tế cần sửa và gửi lên form sửa
// router.get('/:id/edit', staffController.edit);

//@router sửa nhân viên y tế
router.put('/:id', staffController.update);

//@router delete
router.delete('/:id', staffController.destroy);

//@router findById
router.get('/:id', staffController.getStaffById);

//@router create
router.post('/create', staffController.create);

//@router lấy tất cả nhân viên y tế
router.get('/', staffController.showAll);

module.exports = router;
