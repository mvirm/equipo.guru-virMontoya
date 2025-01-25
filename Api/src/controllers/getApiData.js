//llama a la Api y guarda la info en la BD cuando se levanta el server
const axios = require('axios');
const {Product} = require('../db');


const URL = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10';

const getDataApi = async () => {
    try {
        const response = await axios.get(URL);
        const data = response.data.map(p => {
            return {
                id: p.id,
                title: p.title,
                price: p.price,
                description: p.description,
                image: p.images[0],
            }
        });

        await Product.bulkCreate(data);
        console.log('Products saved in DB');
        
    } catch (error) {
        console.log(error, 'could not get the data');
    }
};

module.exports = {
    getDataApi
}