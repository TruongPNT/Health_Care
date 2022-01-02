const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController');

//@router lấy id của người dùng cần sửa và gửi lên form sửa
router.get('/:id/edit', UserController.edit);

//@router sửa người dùng
router.put('/:id', UserController.update);

//@router delete
router.delete('/:id', UserController.destroy);

//@router create
router.post('/create', UserController.create);

//@router người dùng theo role
router.get('/:role', UserController.showUserByRole);

//@router lấy tất cả người dùng
router.get('/', UserController.showAll);

module.exports = router;
