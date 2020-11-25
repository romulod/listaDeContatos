const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const db = require('./db');
const contatosRoutes = require('./api/controller/contatos');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

// Rotas para requests
app.use('/contatos', contatosRoutes);

app.use((req, res, next) => {
    const error = new Error("Pagina nao encontrada");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        mensagem: error.message
      }
    });
  });
  

module.exports = app;