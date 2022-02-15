const {Router}= require('express');
const  {getIdCountry, getAllNameCountries}= require('../controllers/countries');


const router= Router();

router.get('/', getAllNameCountries);
router.get('/:idL',getIdCountry);


module.exports= router;