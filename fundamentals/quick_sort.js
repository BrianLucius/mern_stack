const partition = (arr, i, j) => {
    const pivot = arr[Math.floor(Math.random()* (j - i) + i)];
    // pivot = 5;
    console.log("i: ",i , " j: ", j, " Pivot Value: ", pivot);

    while (i < j) {
        while (arr[i] < pivot) {
            i++;
            console.log("i: ",i, " j:", j);
        } 
        while (arr[j] > pivot) {
            j--;
            console.log("i: ",i, " j:", j);
        } 
        if (i <= j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            console.log(arr);
            i++;
            j--;
            }
        }
    // console.log(arr);
    return i;
}

const quickSort = (arr, left = 0, right = arr.length-1) => {
    if (left < right) {
        const index = partition(arr, left, right);

        quickSort(arr, left, index-1);
        quickSort(arr, index, right);
    }
    return arr;
}

//              0  1  2  3  4  5  6   7  8  9  
const sample = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9 ]
const arr1 = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ];
const arr2 = [1, 3, 5, 4, 8, 30, 20, 17, 7];

// console.log("Sample: ", partition(sample, 0, 9));
console.log("Sample: ", quickSort(sample));
// console.log("Arr1: ", quickSort(arr1));
// console.log("Arr2: ", quickSort(arr2));