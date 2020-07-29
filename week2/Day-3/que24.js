var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
let count=0;
let sum=0;
for(var i in arr){
if(arr[i]>=0)
{
    count++;
}else
{
    sum+=arr[i];
}
}
arr=[count,sum]
return arr ;
}
var arr2=countPositivesSumNegatives(arr);

console.log(arr2);