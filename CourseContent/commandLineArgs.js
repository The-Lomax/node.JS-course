// command line arguments are used via passing text on the back of the file name when running the script. These arguments can be passed
// into the program and be used to perform actions

// process.argv.forEach(el => console.log(el));
const yargs = require('yargs')

const mode = process.argv[2]
console.log(yargs.argv)

if (mode === 'add'){
    console.log("adding note")
}
else if (mode === "edit"){
    console.log("editing note")
}
else if (mode === "del"){
    console.log("removing note")
}
else{
    console.log("no command specified")
}