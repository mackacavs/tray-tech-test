const canRoombaMove = require('./canRoombaMove')

const moveRoomba = (roombaDirections, xPosition, yPosition, endOfRoom) => {
  positionsVisited = []

  for (var i = 0; i < roombaDirections.length; i++) {
    switch (roombaDirections[i]) {
      case 'N':
        if (canRoombaMove.roombaCanMoveNorth(endOfRoom, yPosition)) {
          yPosition += 1
          positionsVisited.push([xPosition, yPosition])
          break;
        }
        break;
      case 'S':
        if (canRoombaMove.roombaCanMoveSouth(yPosition)) {
          yPosition -= 1
          positionsVisited.push([xPosition, yPosition])
          break;
        }
        break;
      case 'E':
        if (canRoombaMove.roombaCanMoveEast(endOfRoom, xPosition)) {
          xPosition += 1
          positionsVisited.push([xPosition, yPosition])
          break;
        }
        break;
      case 'W':
        if (canRoombaMove.roombaCanMoveWest(xPosition)) {
          xPosition -= 1
          positionsVisited.push([xPosition, yPosition])
          break;
        }
        break;
    }
  }
  return positionsVisited
}

module.exports = moveRoomba;