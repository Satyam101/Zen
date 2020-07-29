function isEven(num){
    // your code here
    let res;
    if(num!== +(num))
    {
        return -1;
    }
    if(num%2==0)
    {
        res=true;

    }else if(num%2!=0) {
        res=false;

    }

return res;
}
   var even = isEven(1223)
   console.log(even);