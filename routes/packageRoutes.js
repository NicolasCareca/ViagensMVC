const express = require('express');
const router = express.Router();
const packageController = require('../controllers/packageController');

router.get('/packages', packageController.listPackages);

router.get('/packagesCreate', packageController.createMostrar);

router.post('/packagesCreate', packageController.createPackage);

router.get('/packages/:id/edit', packageController.editPackage);

router.put('/packages/:id', packageController.updatePackage);


router.delete('/packages/:id', packageController.deletePackage);



module.exports = router;
