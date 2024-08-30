const fs = require("fs");
const path = require("path");
const dbFilePath = path.join(__dirname, 'data.json');

function fileExist() {
    return fs.existsSync(dbFilePath);
}

function writeFile(data) {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2))
}

function readFile(path) {
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}

function defineNewId(){
    const data = readAllData();
    return data.length + 1;
}

function readAllData() {
    if(fileExist()) {
        try{
            return readFile(dbFilePath);

        } catch(error) {
            console.log(error);
            throw error;
        }
    }
    return [];
}

function readDatabyId(id) {
    data = readAllData();
    return data.find(record => record.id === id);
}

function updateData(id, newName) {
    data = readAllData();
    const index = data.findIndex(record => record.id === id);
    newPerson = {
        id: id,
        name: newName
    }

    data[index] = newPerson;
    writeFile(data);
}

function createData(newRecord) {
    
    const data = readAllData();
    console.log(data)
    data.push({
        id: defineNewId(),
        name: newRecord
    })
    writeFile(data)
}

function deleteData(id) {
    let data = readAllData();
    data = data.filter(record => record.id !== id);
    writeFile(data);
}


const fakeDBFunctions = {
    createData,
    readAllData,
    readDatabyId,
    updateData,
    deleteData
}

module.exports = fakeDBFunctions;