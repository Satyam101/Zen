//Remove duplicates from an array

var res=function(arr)
{
arr=[1,2,2,3,3,4,5,6,7,6,8];
arr=arr.sort();
var len=arr.length;
var temp=[];
var j=0;
for(var i=0;i<arr.length-1;i++)
{
if(arr[i]!=arr[i+1])
{
    temp[j++]=arr[i];


}
}
temp[j++]=arr[len-1];

console.log(temp);



}
res();

