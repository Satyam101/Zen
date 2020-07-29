var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function findMax(ar)
{let maxval=-1000000;

for(var i in ar)
{
    if(ar[i]>maxval)
    {
        maxval=ar[i];
    }
}
return maxval;
}

var max = findMax(ar);
console.log('Max: ', max);