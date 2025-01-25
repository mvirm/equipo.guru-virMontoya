const {Product} = require('../../db')

const getProductById = async(id) => {
    const product = Product.findByPk(id);
    if(!product) throw new Error(`Product with ID ${id} not found`);
    return product
}

module.exports = {getProductById}