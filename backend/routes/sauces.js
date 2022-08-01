//importaion des dépendances
const express = require('express');
const router = express.Router();

//importaion des middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//importaion du controller "sauces"
const saucesCtrl = require('../controllers/sauces');


//enregistrer un objet
router.post('/', auth, multer, saucesCtrl.createSauce);

//Like/Dislike un objet
router.post('/:id/like', auth, saucesCtrl.likeSauce);

//modification d'un objet
router.put('/:id', auth, multer, saucesCtrl.modifySauce);

//supression d'un objet
router.delete('/:id', auth, saucesCtrl.deleteSauce);

//retourne un objet unique 
router.get('/:id', auth, saucesCtrl.getOneSauce);

//retourne tout les objets 
router.get('/', auth, saucesCtrl.getAllSauce);


//exportaion du module
module.exports = router;