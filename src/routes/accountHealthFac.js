const express = require('express');
const router = express.Router();

const accountHealthFacController = require('../app/controllers/AccountHealthFacController');

//@router lấy id của account cơ sở y tế cần sửa và gửi lên form sửa
router.get('/:id/edit', accountHealthFacController.edit);

//@router sửa account cơ sở y tế
router.put('/:id', accountHealthFacController.update);

//@router delete
router.delete('/:id', accountHealthFacController.destroy);

//@router findById
router.get('/:id', accountHealthFacController.getAccountHealthFacById);

//@router create
router.post('/create', accountHealthFacController.create);

//@router lấy tất cả account cơ sở y tế
router.get('/', accountHealthFacController.showAll);

module.exports = router;
