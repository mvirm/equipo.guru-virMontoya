//instancio express y el uso de middlewares(cors, express.json, morgan)
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const router = require('./routes/index.js');


require('./db.js');

const server = express();

server.name = 'API';

server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));

const corsOptions = {
    origin: ['http://localhost:5173', 'https://mvirm.github.io/equipo.guru-virMontoya'], // Orígenes permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
    credentials: true // Permite el uso de cookies en las solicitudes
};

server.use(cors(corsOptions));
server.use(cookieParser());
server.use(morgan('dev')); 
server.use('/', router);

// middleware de manejo de errores
server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;