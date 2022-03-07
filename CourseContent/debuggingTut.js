// debugging using debugger
// use node inspect in terminal, followed by usual file name and arguments if applicable
// then
// navigate to chrome://inspect to see your file under remote targets
// use developer console via inspect to debug application

const add = (a, b) => {
    debugger
    return Number(a) + Number(b)
}

try {
    console.log(add(a, 5))
} catch (error) {
    console.log(error.message)
}