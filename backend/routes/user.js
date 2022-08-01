//importaion des dépendances
const express = require('express');
const router = express.Router();

//importaion du controller "user"
const userCtrl = require('../controllers/user');

//inscription de l'utilisateur 
router.post('/signup', userCtrl.signup);

//conexion au compte de l'utilisateur 
router.post('/login', userCtrl.login);


//exportaion du module
module.exports = router;