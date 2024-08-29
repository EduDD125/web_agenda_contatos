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
    return data.length;
}

function readAllData() {
    if(fileExist) {
        try{
            readFile(dbFilePath)
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

function updateData(id, newData) {
    data = readAllData();
    const index = data.findIndex(record => record.id === id);
    if (index != -1 ) {
        data[index] = { ...data[index], ...newData} //operador de espalhamento -> serve para atualizar dados do objeto
    }
}
function createData(newRecord) {
    const data = readAllData();
    data.push({
        id: defineNewId(),
        newRecord
    })
    writeFile(data)
}

function deleteData(id) {
    const data = readAllData();
    data.filter(record => record.id !== id);
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