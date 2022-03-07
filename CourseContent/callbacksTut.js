setTimeout(() => {
    console.log('2 seconds have passed')
}, 2000)

const names = ['Jack', 'Chris', 'Jackie', 'Pete', 'Tim']

const shortNames = names.filter((name) => name.length <= 4)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 1,
            lon: 1
        }
        callback(data)
    }, 2500)
}

geocode('Warsaw', (data) => console.log(data))