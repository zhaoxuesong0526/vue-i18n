const fs = require('fs')
module.exports = function writeFile(value){
    fs.writeFile('message.json', value, (err) => {
        if (err) {
            throw err
        }
  console.log('JSON data is saved.')
      })
}
