'use strict';

let { start } = require('./src/server');
const { dataBase } = require('./models');


dataBase.sync()
  .then(() => {
    console.log('sucsessfully connected');
    start(3000);
  })
  .catch((e) => console.error(e));
