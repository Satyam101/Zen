var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(ar)
{let temp=[];
    let j=0;
    for(var i in ar)
    {
        if(ar[i]>0)
        {
            temp[j++]=ar[i];
        }
    }
        ar=temp;
        
    return ar;
}

var ar2 = getPositives(ar);
console.log(ar2);