const turnTextIntoArray = (element) => {
  let xPosition = parseInt(element[0], 10);
  let yPosition = parseInt(element[2], 10);
  return [xPosition, yPosition]
}

const turnArrayIntoText = (array) => {
  arrayIntoText = array.map(element => {
    return element.toString().replace(',', ' ')
  })
  return arrayIntoText
}

module.exports = {
  turnArrayIntoText: turnArrayIntoText,
  turnTextIntoArray: turnTextIntoArray,
}