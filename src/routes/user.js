const express = require('express');
const router = express.Router();

const UserController = require('../app/controllers/UserController');

//@router sửa người dùng
router.put('/:id', UserController.update);

//@router delete
router.delete('/:id', UserController.destroy);

//@router create
router.post('/create', UserController.create);

//@router người dùng theo id
router.get('/:id', UserController.showUserById);

//@router lấy tất cả người dùng
router.get('/', UserController.showAll);

module.exports = router;
