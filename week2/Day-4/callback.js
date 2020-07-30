
function f1(a,b)
{
    var val1=20;
    var val2=10;


if(a==0)
{       oper[a]=add(val1,val2);
    return oper[a];

}
if(a==1)
{   oper[a]=sub(val1,val2);
    return oper[a];
}
if(a==2)
{   oper[a]=mul(val1,val2);
    return oper[a];
}
}
var oper=[add,sub,mul];

console.log("array is ",oper)
w1=f1(0,oper);
console.log(w1);

w2=f1(1,oper);
console.log(w2);


w3=f1(2,oper);
console.log(w3);

function add(x,y)
{
    return x+y;
}


function sub(p,q)
{
    return p-q;
}

function mul(r,s)
{
    return r*s;
}


