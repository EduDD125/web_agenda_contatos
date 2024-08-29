// importando dependencias ou arquivos
const express = require('express');
const app = express();

//rodando funções de dependencias ou de arquivos
app.use(express.json())

app.listen(3000, () => {
    console.log("conectado na porta padrão 3000")
})
