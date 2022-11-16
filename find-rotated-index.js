function findRotatedIndex(arr, n) {
    let start = 0;
    let end = arr.length - 1;
    //Finds the "split" || Where the array has been rotated
    while(start < end){
        let middle = Math.floor(( start + end ) / 2);

        if(arr[middle] > arr[end]){
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    let split = start;

    start = 0;
    end = arr.length - 1;

    if(n >= arr[split] && n <= arr[end]){
        start = split;
    } else{
        end = split
    }

    while( start <= end ){
        let middle = Math.floor(( start + end ) / 2 );
        if(n === arr[middle]){
            return middle;
        } else if( n > arr[middle]){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1
}