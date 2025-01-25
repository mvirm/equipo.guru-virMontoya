//instacio Router, modularizo las rutas, este es archivo que contiene todos los ruteos 
const { Router } = require('express');
const {subscriberRouter} = require('./subscriberRouter')
const {productRouter} = require('./productRouter')

const router = Router();

router.use('/subscriber', subscriberRouter);
router.use('/product', productRouter);


module.exports = router;