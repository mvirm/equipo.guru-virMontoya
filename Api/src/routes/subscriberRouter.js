//instacion Router, desvio las rutas get y post de activity a la carpeta handlers
const {Router} = require('express');
const {createSubscriberHandler} = require('../handlers/subscriber/createSubscriberHandler')


const subscriberRouter = Router();

subscriberRouter.post('/create', createSubscriberHandler)


module.exports = {subscriberRouter}