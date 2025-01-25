const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getDataApi} = require('./src/controllers/getApiData.js');
require('dotenv').config();
const { PORT } = process.env;

const port = PORT || 3001;

conn.sync({ force: true }).then(async () => {
  console.log('Las tablas han sido creadas');
  await getDataApi(); // Si necesitas obtener datos adicionales
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
    console.log('Conectado a la base de datos');
  });
}).catch(error => {
  console.error('Error al sincronizar la base de datos:', error);
});
