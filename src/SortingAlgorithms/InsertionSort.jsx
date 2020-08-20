
export const insertionSort = arr => {
    const animations = [];
    const auxillaryArray = arr.slice();
    
    insertionSortHelper(auxillaryArray, animations);
    return animations;
    
}

const insertionSortHelper = (auxillaryArray, animations) => {
    const n = auxillaryArray.length;
    for (let i = 1; i < n; i++) {
        const key = auxillaryArray[i];
        let j = i - 1;
        animations.push(["comparision1", j, i]);
        animations.push(["comparision2", j, i]);

        // Moving elements of array[0..i-1] that are greater than the key ahead one position
        while (j >= 0 && auxillaryArray[j] > key) {
            animations.push(["overwrite", j + 1, auxillaryArray[j]]);
            auxillaryArray[j + 1] = auxillaryArray[j];
            j = j - 1;

            if(j >= 0) { // ???? Didn't need it in algorithm
                animations.push(["comparision1", j, i]);
                animations.push(["comparision2", j, i]);
            }     
        }
        animations.push(["overwrite", j + 1, key]);
        auxillaryArray[j + 1] = key;
    }
}