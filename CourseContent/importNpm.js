// import npm validator
const validator = require('validator') // no need for file extension for NPM modults

console.log(validator.isEmail("kryniubest@.com"))
console.log(validator.isURL("https://www.itlomax.co.uk"))

// if the node_modules folder is missing, you can use command  "npm install" and it will reinstall
// all the dependencies, based on the package.json and package-lock.json files.

