const calculateTip = (total, tipPct = 10) => total + (total * (tipPct / 100));

const fahrenheitToCelsius = (temp) => (temp - 32) / 1.8;

const celsiusToFahrenheit = (temp) => (temp * 1.8) + 32;

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) return reject('Cannot use negative number');
            resolve(a + b);
        }, 2000);
    });
}


module.exports = {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}