const service = require('../src/service/service.js');

//jest.mock('fs');
let database;

 beforeEach(() => {
     jest.resetModules();
     database = require('../src/repository/database');
     jest.mock('../src/repository/database');
 });

test('Should count number found', () => {
  database.getData.mockImplementation((callback) => 
    [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]]
  );
  service.loadData(database);
  result = service.countNumber(5);
  expect(result).toEqual(2);
})
