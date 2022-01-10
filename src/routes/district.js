const express = require('express');
const router = express.Router();

const districtController = require('../app/controllers/DistrictController');

//@router lấy id của Quận/Huyện cần sửa và gửi lên form sửa
router.get('/:id/edit', districtController.edit);

//@router sửa Quận/Huyện
router.put('/:id', districtController.update);

//@router delete
router.delete('/:id', districtController.destroy);

//@router findById
router.get('/:id', districtController.getDistrictById);

//@router create
router.post('/create', districtController.create);

//@router lấy tất cả Quận/Huyện
router.get('/', districtController.showAll);

module.exports = router;
