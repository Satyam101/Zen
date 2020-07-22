var arr=[1,2,3,49,50,6,10];
var max=Number.MIN_VALUE;
for(var i=0;i<arr.length;i++){
if(arr[i]>max)
{
    max=arr[i];
}
}
console.log(max);