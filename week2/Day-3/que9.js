function lessThan100(num1,num2) {
let sum=num1+num2;
let flag=false;
if(sum<100)
{
    flag =true;
}
return flag;
}
var res = lessThan100(22,15)
console.log(res)
