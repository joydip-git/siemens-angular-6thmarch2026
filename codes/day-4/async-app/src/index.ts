const divide = (a: number, b: number): Promise<number> => {
    const p = new Promise<number>(
        (resolveFnRef, rejectFnRef) => {
            const result = a / b
            if (result === Infinity) {
                const error = new Error('divisor should not be zero...')
                rejectFnRef(error.message)
            }
            resolveFnRef(result)
        }
    )
    return p
}

const add = (a: number, b: number) => new Promise((resolve, reject) => {
    resolve(a + b)
})

// const divRes = divide(12, 3);
// console.log(divRes);
const divPromise = divide(12, 3)
divPromise
    .then((divRes) => {
        console.log(divRes)
        const addPromise = add(12, divRes)
        addPromise
            .then((addRes) => console.log(addRes))
            .catch((e) => console.log(e))
    })
    .catch((err) => console.log(err))

