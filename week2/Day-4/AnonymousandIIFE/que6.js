//Return median of two sorted arrays of same size 
var res=function(arr1,arr2)
{
    arr1=[1,3,5,7,9,11];
    arr2=[2,4,6,8,10,12];
    var len1= parseInt(arr1.length);
    var len2= parseInt(arr2.length);
    var i=0;
    var j=0;
    var k=0;
    var temp=[];
for(var count=0;count<arr1.length+arr2.length;count++)
{
    if(arr1[i]<arr2[j])
    {   
        temp[k++]=arr1[i];
        i++;
    }else{

        temp[k++]=arr2[j];
        j++;
    }


}
    var m1= temp[temp.length/2];
    
    var result= parseInt(m1);
    console.log(result)

console.log(temp)
}

res();
