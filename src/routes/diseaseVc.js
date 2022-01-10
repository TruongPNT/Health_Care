const express = require('express');
const router = express.Router();

const diseaseVcController = require('../app/controllers/DiseaseVcController');

//@router lấy id của bệnh và vaccine đi kèm cần sửa và gửi lên form sửa
router.get('/:id/edit', diseaseVcController.edit);

//@router sửa bệnh và vaccine đi kèm
router.put('/:id', diseaseVcController.update);

//@router delete
router.delete('/:id', diseaseVcController.destroy);

//@router create
router.post('/create', diseaseVcController.create);

//@router lấy tất cả bệnh và vaccine đi kèm
router.get('/', diseaseVcController.showAll);

module.exports = router;
