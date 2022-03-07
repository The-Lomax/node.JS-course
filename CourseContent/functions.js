// Functions can be defined in several ways:

function add(a, b) {
    return a + b
}

const difference = function (a, b) {
    if (a > b) {return a - b}
    else if (b > a) {return b - a}
    else return 0
}

printMessage = () => {
    console.log('Hi there')
}

multiply = (a, b) => {
    return a * b
}

exports.add = add
exports.difference = difference
exports.printMessage = printMessage
exports.multiply = multiply