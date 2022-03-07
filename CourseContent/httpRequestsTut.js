const request = require('postman-request')
const getCoords = require('./utils/geocoords.js')
const getWeather = require('./utils/forecast.js')
const yargs = require('yargs')

const mode = process.argv[2]

console.log('Sending requests..')

yargs.command({
    command: 'get',
    describe: 'get weather for location',
    builder: {
        loc: {
            describe: 'Address',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => getCoords.getCoords(argv.loc, (city, coords) => getWeather.getWeather(city, coords))
})

yargs.parse()