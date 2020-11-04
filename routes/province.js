const express = require('express');
const router = express.Router();

const provinceController = require('../controllers/province');


router.post('/province/add-confirmed', provinceController.postAddConfirmed);

router.get('/province/confirmed/:name', provinceController.getProvinceConfirmed);

router.post('/province/add-deaths', provinceController.postAddDeaths);

router.post('/province/covid', provinceController.getAllProvince);

router.get('/province/death/:name', provinceController.getProvinceDeaths);

router.get('/province/recovered/:name', provinceController.getProvinceRecovered);

module.exports = router;