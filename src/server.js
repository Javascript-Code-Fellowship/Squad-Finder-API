'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./error-handlers/errorHandler');
//require error handlers
//require routes

app.use(express.json());
app.use(cors());
//app.use routes
//app.use errors

app.use(errorHandler);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Proof of life on ${PORT}`);
  });
}

module.exports = {
  app,
  start,
};
