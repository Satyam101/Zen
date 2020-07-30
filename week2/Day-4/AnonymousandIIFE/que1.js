//Anonymous

var res=function(arr)
{
    var arr=[1,2,3,4,5,6,7,8,9,10]
    var temp=[];
    let j=0;
    for(var i in arr)
    {
        if(arr[i]%2!=0)
        {
            temp[j++]=arr[i];
        }
    }
return temp;
}
 console.log(res());


 //IIFE
 (function() {
    
    var arr=[1,2,3,4,5,6,7,8,9,10]
    var temp=[];
    let j=0;
    for(var i in arr)
    {
        if(arr[i]%2!=0)
        {
            temp[j++]=arr[i];
        }
    }
console.log(temp);
})();   