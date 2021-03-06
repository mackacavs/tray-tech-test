const moveRoomba = require('./moveRoomba');
const changeElement = require('./changeElement');
const writeToOutput = require('./writeToOutput');
const infoNeededFromTextFile = require('./infoNeededFromTextFile');

const app = () => {
  const info = infoNeededFromTextFile()
  let positionsVisited = moveRoomba(info.roombaDirections, info.xPosition, info.yPosition, info.endOfRoom)

  positionsVisited = changeElement.turnArrayIntoText(positionsVisited)

  const patchesCleaned = info.patchesOfDirt.filter(element => positionsVisited.includes(element));
  const finalPosition = positionsVisited.slice(-1)[0]

  writeToOutput(finalPosition, patchesCleaned)
};

app()

exports.app = app;