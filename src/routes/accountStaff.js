const express = require('express');
const router = express.Router();

const accountStaffController = require('../app/controllers/AccountStaffController');

//@router lấy id của account nhân viên y tế cần sửa và gửi lên form sửa
router.get('/:id/edit', accountStaffController.edit);

//@router sửa account nhân viên y tế
router.put('/:id', accountStaffController.update);

//@router delete
router.delete('/:id', accountStaffController.destroy);

//@router findById
router.get('/:id', accountStaffController.getAccountById);

//@router create
router.post('/create', accountStaffController.create);

//@router lấy tất cả account nhân viên y tế
router.get('/', accountStaffController.showAll);

module.exports = router;
