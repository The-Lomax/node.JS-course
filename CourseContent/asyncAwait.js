const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) return reject('Cannot use negative number');
            resolve(a + b);
        }, 2000);
    });
}

const doWork = async () => {
    const sum = await add(1,2);
    const sum2 = await add(sum, -3);
    const sum3 = await add(sum2, 5);
    return await add(sum + sum2, sum3);
}

doWork().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

console.log('Hi');