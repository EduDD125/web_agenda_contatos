const express = require('express');
const db = require("./dataBase/dataBaseInterface");
const path = require('path');



const routes = express.Router();



routes.get("/friend", (res) => {
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
    } catch (error) {
        return res.status(500).json({message: `Erro no servidor: ${error}`})
    }
})

routes.put("/friend", (req, res) => {
    const {id, newName} = req.body;
    if (!id || !newName) return res.status(400).json({message: "Paramentros de edição faltantes"})
    try{
        db.update(id, newName);
    } catch (error) {
        return res.status(500).json({message: `Erro no servidor: ${error}`})
    }
})

routes.delete("/friend", (req, res) => {
    const {id} = req.body;
    if (!id) return res.status(400).json({message: "Parametros de deleção ausente"});
    try {
        db.delete(id);
    } catch(error) {
        return res.status(500).json({message: `Erro no servidor: ${error}`})
    }
})

