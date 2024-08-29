// importando dependencias ou arquivos
const express = require('express');
const app = express();
const routes = require('./routes')

//rodando funções de dependencias ou de arquivos
app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log("conectado na porta padrão 3000")
})
