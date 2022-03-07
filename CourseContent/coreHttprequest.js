const http = require('http')

const URL = 'http://api.weatherstack.com/';
const mode = 'current?access_key=';
const apiKey = '7f5090cf0ad6c85dbe9aa9b788bf4120';
const query = '&query=';
const units = '&units=m';


const request = http.request(
    URL + mode + apiKey + query + 'Warsaw' + units, (response) => {
        let data = ''
        response.on('data', (chunk) => {
            data = data + chunk.toString()
        })
        response.on('end', () => {
            const body = JSON.parse(data)
            console.log(body)
        })
    }
)

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()