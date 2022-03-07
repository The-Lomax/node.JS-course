// callbacks

const doItCallback = (callback) => {
    setTimeout(() => {
        // callback('error', undefined);
        callback(undefined, [1, 4, 7]);
    }, 2000)
}

// doItCallback((error, result) => {
//     if (error) return console.log(error);

//     console.log(result);
// })

// promises
const doItPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([15, 16, 17]);
        // reject("error");
    }, 2000)
})

// doItPromise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

// // chain promises
// doItPromise.then((data) => {
//     console.log(data);
// }).then(() => {
//     console.log("completed");
// }).then(() => {
//     console.log("completed again");
// }).finally(() => {
//     // console.log(data); // will crash cause data stops existing after first promise resolves. cannot pass data from resolve to resolve.
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(a + b);
            resolve(a + b);
        }, 2000);
    });
}

add(1,2).then((sum) => {
    return add(sum, 3);
}).then((sum) => {
    return add(sum,4);
}).then((sum) => {
    return add(sum,5);
}).then((sum) => {
    return add(sum,6);
}).then((sum) => {
    return add(sum,7);
}).catch((err) => {
    console.log(err);
})