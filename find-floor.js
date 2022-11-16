function findFloor(arr , low, high , x){
    // If low and high cross each other
    if (low > high)
        return -1;
 
    // If last element is smaller than x
    if (x >= arr[high])
        return high;
 
    // Find the middle
    let mid = (low + high) / 2;
 
    if (arr[mid] == x)
        return mid;
 
    
    if (mid > 0 && arr[mid - 1] <= x && x < arr[mid])
        return mid - 1;
 
    if (x < arr[mid])
        return findFloor(
            arr, low,
            mid - 1, x);
 
    return findFloor(
        arr, mid + 1, high,
        x);
}
