const express = require('express');
const router = express.Router();

const roleController = require('../app/controllers/RoleController');

//@router lấy id của quyền cần sửa và gửi lên form sửa
router.get('/:id/edit', roleController.edit);

//@router sửa quyền
router.put('/:id', roleController.update);

//@router delete
router.delete('/:id', roleController.destroy);

//@router findById
router.get('/:id', roleController.getRoleById);

//@router create
router.post('/create', roleController.create);

//@router lấy tất cả quyền
router.get('/', roleController.showAll);

module.exports = router;
