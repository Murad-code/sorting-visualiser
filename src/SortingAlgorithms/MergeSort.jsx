export const mergeSort = array => {
    const animations = [];

    if (array.length <= 1) return array;

    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

const mergeSortHelper = (mainArray, start, end, auxiliaryArray, animations) => {
    if (start === end) return;

    const middle = Math.floor((start + end) / 2);
    
    mergeSortHelper(auxiliaryArray, start, middle, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middle+1, end, mainArray, animations);

    doMerge(mainArray, start, middle, end, auxiliaryArray, animations);
}

const doMerge = (mainArray, start, middle, end, auxiliaryArray, animations) => {
    let k = start;
    let i = start;
    let j = middle + 1;

    while (i <= middle && j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    while (i <= middle) {
        animations.push([i, i]);
        animations.push([i, i]);
        
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= end) {
        animations.push([j, j]);
        animations.push([j, j]);
        
        animations.push([k, auxiliaryArray[j]])
        mainArray[k++] = auxiliaryArray[j++];
    }
}