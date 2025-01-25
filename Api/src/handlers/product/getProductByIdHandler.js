const {getProductById} = require('../../controllers/product/getProductById');

const getProductByIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        if(!id) throw new Error('Missing ID');
        const product = await getProductById(id);
        !product.title ? res.status(400).send('Product not found') : res.status(200).json(product); 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {getProductByIdHandler};