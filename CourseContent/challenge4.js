// load json data from sample, change the name and age using your info, overwrite the data and test code
const fs = require('fs')

data = fs.readFileSync('sample.json').toString()
person = JSON.parse(data)

person.name = 'Chris'
person.age = 31

data = fs.writeFileSync('sample.json', JSON.stringify(person))