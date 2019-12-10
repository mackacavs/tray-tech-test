const assert = require('chai').assert;
const moveRoomba = require('../src/moveRoomba');

describe('moveRoomba', function () {
  it('should return the locations where the roomba has moved to', function () {
    assert.deepEqual(moveRoomba('NNEEEEEESEESWNWW', 1, 2, [5, 5]), [[1, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [5, 3],
    [5, 2],
    [4, 2],
    [4, 3],
    [3, 3],
    [2, 3]])
  })
})