const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/', usercontroller.getAllUsers);
router.post('/', usercontroller.createUser);
router.get('/:id', usercontroller.getUserById); 
router.put('/:id', usercontroller.updateUser); 
router.delete('/:id', usercontroller.deleteUser); 

module.exports = router; 