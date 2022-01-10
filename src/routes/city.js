const express = require('express');
const router = express.Router();

const cityController = require('../app/controllers/CityController');

//@router lấy id của thành phố cần sửa và gửi lên form sửa
router.get('/:id/edit', cityController.edit);

//@router sửa thành phố
router.put('/:id', cityController.update);

//@router delete
router.delete('/:id', cityController.destroy);

//@router findById
router.get('/:id', cityController.getCityById);

//@router create
router.post('/create', cityController.create);

//@router lấy tất cả thành phố
router.get('/', cityController.showAll);

module.exports = router;
