const fs = require('fs')

const writeToOutput = (finalPosition, patchesCleaned) => {
  const data = `${finalPosition}\n${patchesCleaned.length}`

  fs.writeFile('output.txt', data, (err) => {
    if (err) throw err;
  })

  console.log(data)

}

module.exports = writeToOutput;