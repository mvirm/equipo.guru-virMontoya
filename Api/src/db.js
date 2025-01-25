//intancio sequelize, conecto con postgres, instancio models con sequelize como argumento, creo relaciones entre los modelos
require('dotenv').config();
const UserSubscriberModel = require('./models/UserSubscriber')
const ProductModel = require('./models/Product')
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//Creo una instancia de conexión a la base de datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, //no se muestren en la consola los comandos SQL que Sequelize ejecuta
  native: false, //usa solo la biblioteca estándar de JavaScript para las operaciones
}); 

//inicializo los modelos en sequelize
UserSubscriberModel(sequelize);
ProductModel(sequelize);

//destructuring de los modelos
const {
    UserSubscriber,
    Product,
  } = sequelize.models;
//aca declaro las relaciones entre ellos

UserSubscriber.belongsToMany(Product, {through: 'userSubscriber-product'});
Product.belongsToMany(UserSubscriber, {through:'userSubscriber-product'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};