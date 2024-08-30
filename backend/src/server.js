// importando dependencias ou arquivos
const express = require('express');
const app = express();
const corsMiddleware = require('./corsConfiguration')
const routes = require('./routes')

//rodando funções de dependencias ou de arquivos
app.use(express.json());
app.use(corsMiddleware);
app.use(routes);

app.listen(5000, () => {
    console.log("conectado na porta padrão 5000");
})
