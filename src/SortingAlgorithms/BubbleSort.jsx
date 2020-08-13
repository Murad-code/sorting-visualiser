/* The bubble sort pushes two different types of arrays:
- 2 Values: To animate the changing colours of the bars being sorted
- 4 Values: To pass the height of the bars as well as their index value to actually 'swap' them in SortingVisualiser.js
*/

export const bubbleSort = (arr) => {
    const animations = [];
    if (arr.length <= 1) return arr;

    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            animations.push([j, j + 1]);
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

            }
            animations.push([j, arr[j], j + 1, arr[j + 1]]);
            animations.push([j, j + 1]);
        }
    }
    return animations;
}