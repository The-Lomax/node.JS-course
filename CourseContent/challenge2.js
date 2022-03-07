// Challenge - import another function from another file and use it here

const fl = require('./functions.js')

fl.printMessage()
console.log(fl.add(2, 5))
console.log(fl.difference(2, 2))
console.log(fl.multiply(4,6))