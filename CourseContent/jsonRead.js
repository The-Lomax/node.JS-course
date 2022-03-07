const fs = require('fs')

string = fs.readFileSync('jsonData.json')
data = JSON.parse(string.toString())
console.log(data.songs.title)