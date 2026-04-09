const divideNumber = async (a: number, b: number): Promise<number> => {
    const result = a / b
    if (result === Infinity) {
        const error = new Error('divisor should not be zero...')
        throw error
    }
    return result
}
const addNumber = async (a: number, b: number): Promise<number> => a + b

async function callAsync() {
    try {
        const divPromise = divideNumber(12, 3)
        const divRes = await divPromise
        const addPromise = addNumber(12, divRes)
        const addRes = await addPromise
        console.log(addRes);
    } catch (error: any) {
        console.log(error.message);
    }
}

callAsync()



