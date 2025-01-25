const {Product} = require('../../db')

const getAllProducts = async () => {
    const products = await Product.findAll(
        // {order: [
        //     ['title'],
        // ]}
    );
    console.log(products);
    
    if(!products) throw new Error('Products not found');
    return products;
}

module.exports = {getAllProducts}