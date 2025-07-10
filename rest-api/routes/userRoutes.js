const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// **MySQL Routes**
router.get('/mysql-show', userController.getAllUsersMySQL);
router.post('/mysql-add', userController.createUserMySQL);
router.put('/mysql-edit/:id', userController.updateUserMySQL);
router.delete('/mysql-delete/:id', userController.deleteUserMySQL);

// **MongoDB Routes**
router.get('/mongo-show', userController.getAllUsersMongo);
router.post('/mongo-add', userController.createUserMongo);
router.put('/mongo-edit/:id', userController.updateUserMongo);
router.delete('/mongo-delete/:id', userController.deleteUserMongo);

module.exports = router;
