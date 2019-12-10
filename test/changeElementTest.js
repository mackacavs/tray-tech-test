const assert = require('chai').assert;
const turnArrayIntoText = require('../src/changeElement').turnArrayIntoText;
const turnTextIntoArray = require('../src/changeElement').turnTextIntoArray;

describe('Turn text into array', function () {
  it('app should return [1,1] when input is "1 1"', function () {
    assert.deepEqual(turnTextIntoArray('5 5'), [5, 5])
  })
})

describe('Turn array into text', function () {
  it('app should return [1,1] when input is "1 1"', function () {
    assert.deepEqual(turnArrayIntoText(['1 3', '1 4', '2 4']), ["1 3", "1 4", '2 4'])
  })

})