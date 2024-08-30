const express = require('express');
const db = require("./dataBase/dataBaseInterface");
const path = require('path');



function personNotExists(id) {
    data = db.readAll();
    const index = data.findIndex(record => record.id === id);
    const person = data[index];

    return index == -1 || index == undefined;
}

const routes = express.Router();



routes.get("/", (req, res) => {
    return res.status(200).json({message: "bem vindo"});
})

routes.get("/friend", (req, res) => {
    try {
        data = db.readAll();
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({message: 'Erro ao ler arquivo'});
    }
})

routes.post("/friend", (req, res) => {
    const {name} = req.body;
    
    if (!name) return res.status(400).json({message: "Parametros de criação ausentes"});
    try {
        db.create(name)
        return res.status(201).json({message: `Amigo ${name} salvo no sistema`})
    } catch (error) {
        return res.status(500).json({message: `Erro no servidor: não foi possível salva alteração`})
    }
})

routes.put("/friend", (req, res) => {
    const {id, newName} = req.body;

    if (!id || !newName) return res.status(400).json({message: "Paramentros de edição faltantes"})
    if (id === 0) return res.status(400).json({message: "O Id 0 não existe"});

    if (personNotExists(id)) res.status(400).json({message: `Pessoa inexistente`});
    if (data[index].name == newName) return res.status(400).json({message: "Escolha um nome novo para realizar a alteração"})
    
    try{
        db.update(id, newName);
        return res.status(201).json({message: `Mudado nome de '${person.name}' para '${newName}' salvo no sistema`})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: `Erro no servidor: ${error}`})
    }
})

routes.delete("/friend", (req, res) => {
    const {id} = req.body;
    if (!id) return res.status(400).json({message: "Parametros de deleção ausente"});
    if (personNotExists(id)) res.status(400).json({message: `Pessoa inexistente`});
    try {
        db.delete(id);
        return res.status(204).json({message: `Pessoa deletada`})
    } catch(error) {
        return res.status(500).json({message: `Erro no servidor`})
    }
})

module.exports = routes;