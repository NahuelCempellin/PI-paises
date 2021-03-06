const { Router } = require('express');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const {
//     //Todas las funciones que haga en controller
// }
const countryRoutes= require('./countries.js');
const touristActRoutes= require('./touristActs.js');




const router = Router();


router.use('/countries', countryRoutes);
router.use('/touristActs', touristActRoutes);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




module.exports = router;
