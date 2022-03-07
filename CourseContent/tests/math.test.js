const math = require('./math');

test('calculateTip calculates total with tip', () => {
    const total = math.calculateTip(10, 30);
    expect(total).toBe(13);
})

test('calculateTip should calculate default 10% tip', () => {
    const total = math.calculateTip(10);
    expect(total).toBe(11);
})

test('should calculate correct temperature', () => {
    const temp = math.celsiusToFahrenheit(0);
    expect(temp).toBe(32);
})

test('should calculate correct temperature', () => {
    const temp = math.fahrenheitToCelsius(32);
    expect(temp).toBe(0);
})

// test('async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2);
//         done();
//     }, 2000)
// })

test('async promise test example. should add 2 numbers', (done) => {
    math.add(2, 3).then((sum) => {
        expect(sum).toBe(5);
        done();
    })
})

test('should add two numbers async/await', async () => {
    let sum = await math.add(10, 12);
    expect(sum).toBe(22);
})

// template
test('', () => {

})