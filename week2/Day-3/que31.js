var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

function mergeArrays(ar1, ar2)
{
 var result = [];
//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 
 for(var i in ar2)
 {
     result.push(ar2[i]);
 }
 //Some piece of code goes here 
 
 return result;
}
var ar = mergeArrays(ar1, ar2);
console.log(ar);