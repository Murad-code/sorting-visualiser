
export const quickSort = arr => {
    const animations = [];
    const auxillaryArray = arr.slice();
    
    sort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    
    arr = auxillaryArray;
    console.log(arr);
    return animations;
}


const sort = (auxillaryArray, start, end, animations) => {
    if (start < end) {
        const pi = partition(auxillaryArray, start, end, animations);
        sort(auxillaryArray, start, pi - 1, animations);
        sort(auxillaryArray, pi + 1, end, animations);
    }
}

const partition = (auxillaryArray, start, end, animations) => {
    const pivot = auxillaryArray[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        animations.push([i, end])
        animations.push([i, end])

        if (auxillaryArray[i] <= pivot) {
            // Swapping the heights of the two bars
            animations.push([i, auxillaryArray[pivotIndex]]);
            animations.push([pivotIndex, auxillaryArray[i]]);

            swap(auxillaryArray, i, pivotIndex);
            pivotIndex++;
        }
        else {
            // -1 used to skip the loop in SortingVisualiser.js
            animations.push([-1, -1]);
            animations.push([-1, -1]);
        }
        animations.push([-1, -1]);
        animations.push([-1, -1]);    
    }

    animations.push([-1, -1]);
    animations.push([-1, -1]);
    animations.push([-1, -1]);
    animations.push([-1, -1]);

    // Swapping the values heights
    animations.push([pivotIndex, auxillaryArray[end]]);
    animations.push([end, auxillaryArray[pivotIndex]]);
    swap(auxillaryArray, pivotIndex, end);
    return pivotIndex;
}

const swap = (auxillaryArray, i, j) => {
    let temp = auxillaryArray[i]; 
    auxillaryArray[i] = auxillaryArray[j]; 
    auxillaryArray[j] = temp; 
}