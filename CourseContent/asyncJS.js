console.log('Starting...')
let i = 10

setTimeout(() => {
    console.log('5.5 seconds passed')
}, 5500);

let countDown = setInterval(() => {
    console.log(i)
    if (i == 0) clearInterval(countDown)
    else i--
}, 1000)

setTimeout(() =>{
    console.log('0 timer')
}, 0)

console.log('Stopping...')