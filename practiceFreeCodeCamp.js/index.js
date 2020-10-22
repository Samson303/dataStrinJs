// Sum All

function sumAll(arr) {
    function sumAll(arr) {
        let min = Math.min(arr[0], arr[1]);
        let max = Math.max(arr[0], arr[1]);
        let sum = 0;

        for (let i = min; i <= max; i++) {
            sum += i;
        }

        return sum;
    }

    sumAll([1, 4]);
}

/* Compare two arrays and return a new array with any items only found in 
one of the two given arrays, but not both. In other words, return 
the symmetric difference of the two arrays. */

function simDiff(arr1, arr2) {
    var newArr = [];

    for (let item in arr1) {
        if (arr2.includes(item)) {
            return 'not included';
        } else {
            newArr.push(item);
        }
    }

    return newArr;
}