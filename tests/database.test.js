const database = require('../src/repository/database.js');

jest.mock('fs');

test('Should return data', () => {
    let expected = [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]];
    let result = database.getData(
        (row) => {
            return row;
        }
    )
    expect(result).toEqual(expected);
})
