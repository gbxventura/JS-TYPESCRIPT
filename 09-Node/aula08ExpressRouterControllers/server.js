const express = require('express');
const app = express();
const port = 3333;
const routes = require('./routes');
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log('Servidor executando na porta 3333');
});
