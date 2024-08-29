const db = require("./fakeDataBase")

const dataBase = {
    create: db.createData,
    readAll: db.readAllData,
    readById: db.readDatabyId,
    update: db.updateData,
    delete: db.deleteData
};

module.exports = dataBase;