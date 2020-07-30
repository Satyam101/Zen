//Sum of all numbers in an array

//Anonymous function
var res=function(arr)
{
 arr=[23,43,54,56,33,12,21];
 var sum=0;

for(var i in arr)
{
    sum+=arr[i];
}
console.log(sum);
}
res();

//IIFE

(function(){
    arr=[23,43,54,56,33,12,21];
    var sum=0;
    for(var i in arr)
    {
        sum+=arr[i];
    }
    console.log(sum);


})
();
