//Rotate an array by k times and return the rotated array

var res=function leftRotate(arr, d,n) 
{arr=[1,2,3,4,5,6,7];
    d=2;
    n=7; 
    for (var i = 0; i < d; i++) 
        leftRotatebyOne(arr, n); 
        console.log(arr);
} 
res();

function leftRotatebyOne( arr,  n) 
{ 
    var i, temp; 
    temp = arr[0]; 
    for (i = 0; i < n - 1; i++) 
        arr[i] = arr[i + 1]; 
    arr[i] = temp; 
} 
