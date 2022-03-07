// Object property shorthand

const name = 'Chris'

const userAge = 31

const user = {
    name, // if the value of the object property and the variable it links from is the same, can shorten the syntax
    age: userAge,
    location: "Singapore"
}

console.log(user)

// object destructuring
const prod = {
    label: 'Laptop',
    price: 19.99,
    stock: 12,
    salePrice: undefined,
    rating: 4.2
}

const {label: pLabel, stock, rating = 5} = prod // variable = X  is a default if property not found

console.log(pLabel)
console.log(stock)
console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', prod)