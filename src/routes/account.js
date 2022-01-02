const express = require('express');
const router = express.Router();

const accountController = require('../app/controllers/AccountController');

//@router lấy id của account cần sửa và gửi lên form sửa
router.get('/:id/edit', accountController.edit);

//@router sửa account
router.put('/:id', accountController.update);

//@router delete
router.delete('/:id', accountController.destroy);

//@router create
router.post('/create', accountController.create);

//@router lấy tất cả account
router.get('/', accountController.showAll);

module.exports = router;
