const fs = require('fs')

//fs.writeFileSync('test.txt', 'This is the original message.')

// CHALLENGE
// append message to a file, so that it is added, rather than file replaced
msgToAppend = 'This message has been added successfully.\n'
fs.appendFileSync('test.txt', msgToAppend)