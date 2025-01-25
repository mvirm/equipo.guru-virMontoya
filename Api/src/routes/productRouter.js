const {Router} = require('express');
const {getAllProductsHandler} = require('../handlers/product/getAllProductsHandler')
const {getProductByIdHandler} = require('../handlers/product/getProductByIdHandler')

const productRouter = Router();

productRouter.get('/', getAllProductsHandler)
productRouter.get('/:id', getProductByIdHandler)

module.exports = {productRouter}