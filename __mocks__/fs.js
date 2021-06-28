module.exports = {
    existsSync: (path) => {
        return true;
    },
    readFileSync: (path) => {
        return '[[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]]';
    }
}