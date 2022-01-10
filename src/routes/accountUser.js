const express = require('express');
const router = express.Router();

const accountUserController = require('../app/controllers/AccountUserController');

//@router lấy id của account người dùng cần sửa và gửi lên form sửa
router.get('/:id/edit', accountUserController.edit);

//@router sửa account người dùng
router.put('/:id', accountUserController.update);

//@router delete
router.delete('/:id', accountUserController.destroy);

//@router findById
router.get('/:id', accountUserController.getAccountById);

//@router create
router.post('/create', accountUserController.create);

//@router lấy tất cả account người dùng
router.get('/', accountUserController.showAll);

module.exports = router;
