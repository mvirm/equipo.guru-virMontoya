//intancio sequelize, conecto con postgres, instancio models con sequelize como argumento, creo relaciones entre los modelos
require('dotenv').config();
const UserSubscriberModel = require('./models/UserSubscriber')
const ProductModel = require('./models/Product')
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
 // const sequelize = new Sequelize('postgresql://euipogurudbb_user:3bERXWjhnz4VE8oTuNwKIRDbu30Sipg8@dpg-cuaig0l6l47c739ros0g-a.oregon-postgres.render.com/euipogurudbb', {
  logging: false,
  native: false,
  dialectOptions: {
    connectTimeout: 10000, // 10 segundos de tiempo de espera
  },

}); 
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
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