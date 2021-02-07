export const binarySearch = (array, item) => {
    const sortedArray  = array.sort((a, b) => a - b);
    let low = 0;
    let high = array[array.length - 1];
    let operations = 0;

    while (low <= high) {
        let mid = Math.floor(low + high) / 2;
        let guess = sortedArray[mid];

        if(guess === item) {
            operations += 1;
            return mid;
        }
        if (guess > item) {
            operations += 1;
            high = mid - 1;
        }
        else {
            operations += 1;
            low = mid + 1;
        }
    }

    console.log(`Operations count: ${operations}`);

    return null;
}
