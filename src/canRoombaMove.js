const roombaCanMoveNorth = (endOfRoom, yPosition) => {
  return (endOfRoom[1] === yPosition) ? false : true
}

const roombaCanMoveSouth = (yPosition) => {
  return (yPosition === 0) ? false : true
}

const roombaCanMoveEast = (endOfRoom, xPosition) => {
  return (endOfRoom[0] === xPosition) ? false : true
}

const roombaCanMoveWest = (xPosition) => {
  return (xPosition === 0) ? false : true
}

module.exports = {
  roombaCanMoveNorth: roombaCanMoveNorth,
  roombaCanMoveSouth: roombaCanMoveSouth,
  roombaCanMoveEast: roombaCanMoveEast,
  roombaCanMoveWest: roombaCanMoveWest
}