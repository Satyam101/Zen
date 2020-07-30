//Return all the prime numbers in an array
var res=function(arr)
{
    arr=[2,3,4,5,6,7,8,9,10,11,12,13];
arr=arr.filter((number)=>{
for(var i=2;i<=Math.sqrt(number);i++)
{
    if(number%i==0)
      return false;
    
    }
     return true;

})


console.log(arr)
}
res();


//IIFE

(function(){
var arr=[2,3,4,5,6,7,8,9,10,11,12,13];
arr=arr.filter((number) =>{
for(var i=2;i<=Math.sqrt(number);i++)
{
if(number%i===0)
 return false;
}
return true;
})
console.log(arr)
})
();
