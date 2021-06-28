var data = [];
var dataA = [];
var dataB = [];

function loadData(database) {
    data = database.getData(
        (row) => { return row; }
    );
    dataA = database.getDataA();
    dataB = database.getDataB();
}

function countNumber(number) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {        
        for (let j = 0; j < data[i].length; j++) {
            if(data[i][j] == number) {
                count++;
            }
        }     
    }
    return count;
}

module.exports = {
    loadData,
    countNumber
}
