const {getAllProducts} = require('../../controllers/product/getAllProducts')

const getAllProductsHandler = async(req, res) => {
    try {
        const allProducts = await getAllProducts()
        !allProducts.length ? res.status(400).send('Products not found') : res.status(200).json(allProducts)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = {getAllProductsHandler};