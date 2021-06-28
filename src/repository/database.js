const fs = require('fs');

const PATH_FILE = '../../output/';

const fileName = 'data.txt'

function getData(callback) {
    var x = PATH_FILE + fileName;
	if(fs.existsSync(PATH_FILE + fileName)) {
		const data = JSON.parse(fs.readFileSync(PATH_FILE + fileName));
        const result = data.map(row => {        
            return callback(row);
        });
        return result;
    }
    return null;
}

function getDataA() {
    callbackFunctionA = (row) => {
        const [ id, catalogType, title, shortTitle, iconUrl ] = row;
        return { id, catalogType, title, shortTitle, iconUrl }
    }
    return getData(callbackFunctionA);
}

function getDataB() {
    callbackFunctionB = (row) => {
        const [ test1, test2] = row;
        return { test1, test2 }
    }
    return getData(callbackFunctionB);
}

function saveData(data) {
    fs.writeFileSync(PATH_FILE + fileName, JSON.stringify(data));
}

module.exports = { 
    getData,
    saveData,
    getDataA,
    getDataB
 }
