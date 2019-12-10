const assert = require('chai').assert;
const infoNeededFromTextFile = require('../src/infoNeededFromTextFile');

describe('infoNeeedFromTextFile', function () {
  it('should return different items from the text input', function () {
    assert.deepEqual(infoNeededFromTextFile(), {
      roombaDirections: 'NNEEEEEESEESWNWW',
      patchesOfDirt: ['1 0', '2 2', '2 3'],
      endOfRoom: [5, 5],
      xPosition: 1,
      yPosition: 2
    })
  })
})
