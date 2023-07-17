export const bubbleSortArray = (array: number[]): void => {

    console.log('Original array: ', array);

    for (let current = 0; current < array.length; current++) {
        for (let nextIndex = 0; nextIndex < array.length - current; nextIndex++) {
            if (array[nextIndex] > array[nextIndex + 1]) {
                let swapBuffer = array[nextIndex];
                array[nextIndex] = array[nextIndex + 1];
                array[nextIndex + 1] = swapBuffer;
            }
        }
    }

    console.log('Bubble sorted array: ', array);
}