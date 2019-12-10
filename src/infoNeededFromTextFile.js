const fs = require('fs');
const textByLine = fs.readFileSync('input.txt').toString().split("\n");
const changeElement = require('./changeElement');

const infoNeededFromTextFile = () => {
  const roombaDirections = textByLine.pop();
  const patchesOfDirt = textByLine.slice(2)

  const endOfRoom = changeElement.turnTextIntoArray(textByLine[0])
  console.log(textByLine[0])
  const currentPosition = changeElement.turnTextIntoArray(textByLine[1])
  let xPosition = currentPosition[0]
  let yPosition = currentPosition[1]

  return {
    roombaDirections,
    patchesOfDirt,
    endOfRoom,
    xPosition,
    yPosition,
  }
}

module.exports = infoNeededFromTextFile;
