//intancio sequelize, conecto con postgres, instancio models con sequelize como argumento, creo relaciones entre los modelos
require('dotenv').config();
const SubscriberModel = require('./src/models')
const ProductModel = require('./src/models')
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//Creo una instancia de conexión a la base de datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, //no se muestren en la consola los comandos SQL que Sequelize ejecuta
  native: false, //usa solo la biblioteca estándar de JavaScript para las operaciones
}); 

//inicializo los modelos en sequelize
SubscriberModel(sequelize);
ProductModel(sequelize);

//destructuring de los modelos
const {
    Subscriber,
    Product,
  } = sequelize.models;
//aca declaro las relaciones entre ellos

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};