//Takes array,n=length of arr, and x is number being searched in array
function sortedFrequency(arr,n,x){
    let res = 0;
    for ( let i = 0; i < n; i++ ){
        if ( x === arr[i] ){
            res++;
        }
    }
    
    if(res){
        return res;
    }else {
        return -1
    }
}
 

