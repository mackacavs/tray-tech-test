const assert = require('chai').assert;
const roombaCanMoveNorth = require('../src/canRoombaMove').roombaCanMoveNorth;
const roombaCanMoveSouth = require('../src/canRoombaMove').roombaCanMoveSouth;
const roombaCanMoveEast = require('../src/canRoombaMove').roombaCanMoveEast;
const roombaCanMoveWest = require('../src/canRoombaMove').roombaCanMoveWest;

describe('Can roomba move north?', function () {
  it('app should return true', function () {
    assert.equal(roombaCanMoveNorth([5, 5], 2), true)
  })

  it('app should return false', function () {
    assert.equal(roombaCanMoveNorth([5, 5], 5), false)
  })
})

describe('Can roomba move south?', function () {
  it('app should return true', function () {
    assert.equal(roombaCanMoveSouth(2), true)
  })

  it('app should return false', function () {
    assert.equal(roombaCanMoveSouth(0), false)
  })
})

describe('Can roomba more east?', function () {
  it('app should return true', function () {
    assert.equal(roombaCanMoveEast([5, 5], 2), true)
  })

  it('app should return false', function () {
    assert.equal(roombaCanMoveEast([5, 5], 5), false)
  })
})

describe('Can roomba more west?', function () {
  it('app should return true', function () {
    assert.equal(roombaCanMoveWest(2), true)
  })

  it('app should return false', function () {
    assert.equal(roombaCanMoveWest(0), false)
  })
})