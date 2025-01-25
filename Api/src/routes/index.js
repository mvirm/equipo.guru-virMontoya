//instacio Router, modularizo las rutas, este es archivo que contiene todos los ruteos 
const { Router } = require('express');
const {subscriberRouter} = require('../routes/subscriberRouter')
//const {activitiesRouter} = require('./activitiesRouter')

const router = Router();

router.use('/subscriber', subscriberRouter);
//router.use('/activities', activitiesRouter);


module.exports = routes;