const express = require('express');
const router = express.Router();

const wardController = require('../app/controllers/WardController');

//@router lấy id của Phường/Xã cần sửa và gửi lên form sửa
router.get('/:id/edit', wardController.edit);

//@router sửa Phường/Xã
router.put('/:id', wardController.update);

//@router delete
router.delete('/:id', wardController.destroy);

//@router findById
router.get('/:id', wardController.getWardById);

//@router create
router.post('/create', wardController.create);

//@router lấy tất cả Phường/Xã
router.get('/', wardController.showAll);

module.exports = router;
