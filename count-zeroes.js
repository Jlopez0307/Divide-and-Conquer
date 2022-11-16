const firstZero = (arr, start = 0, end = arr.length - 1) => {
    if (end >= start){

        let middle = end + Math.floor(( start - end ) / 2 );

        if((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0){

            return middle

        } else if( arr[middle] === 1){

            return firstZero(arr, middle + 1, start)

        }

        return firstZero(arr, end, middle - 1)
    }
    return -1
}

const countZeroes = (arr) => {
    let first = firstZero(arr)
    if(first === -1){
        return 0;
    }
    return arr.length - first
}