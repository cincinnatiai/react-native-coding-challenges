const doubleArray = (target: number[]): number[] => {
    return target.map(item => item * 2)
}

export const printDoubledArray = (): void => {
    const exampleArray = [1, 2, 3, 4]
    const result = doubleArray(exampleArray)

    console.log('Result is: ', result);
}