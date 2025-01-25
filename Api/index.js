const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getDataApi} = require('./src/controllers/dataApi.js');
require('dotenv').config();
const { PORT } = process.env;

const port = PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  await getDataApi()
  server.listen(port, () => {
    console.log(`server listening at ${port}`, server.name); 
    console.log('connected to the database');
  });
}).catch(error => {
  console.log('The connection to the database could not be established');
});