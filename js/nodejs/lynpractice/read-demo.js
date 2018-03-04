var fs = require('fs')
var data = require('./read-data.json')

console.log(data)

fs.readFile('./read-data.json', 'utf-8', (err,data) => {
    var data = JSON.parse(data)
    console.log(data)
})
