// classic function call
const square = function (x) {
    return x * x
}

// arrow function
const sum = (a, b) => {
    return a + b
}

// shorthand syntax for single statement functions
const sqr = (x) => x * x

// arrow methods aren't suitable for object methods. They don't bind current object instance
const myEvent = {
    name: 'bday',
    guestList: ["Chris", 'John', "Tim"],

    // ES6 object method syntax
    printName() {console.log(this.name)},
    printGuests() {
        // shorthand syntax
        this.guestList.forEach((el) => console.log(el + " attends " + this.name))

        // classic example
        for (el in this.guestList){
            console.log(this.guestList[el] + " attends " + this.name)
        }
    }
}

myEvent.printGuests()