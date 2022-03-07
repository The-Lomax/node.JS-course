// install and require chalk module and test it out
const chlk = require('chalk')

console.log(chlk.blue.bgYellow('Testing') + chlk.red.bold.inverse('New Update'))