var minCost = function(s, cost) {

s='abaacbb'
cost=[1,2,3,4,5,6,7];
    let arr=s;
    let size=arr.length;
        var k=0,l=0;
        var sum=0,minSum=0;
            for(var i=0;i<size-1;i++)
            {
              if(arr[i]===arr[i+1])
                    {                      
                         k= i;
                         l =i+1;  
                         minSum=Math.min(cost[k],cost[l]);  
                        cost[l]=Math.max(cost[k],cost[l]);
                        sum+=minSum;
                    }
            }
            return sum;
    }
    console.log("Minimum Sum is", minCost());

    

//Question 2
// Given an array of numbers arr, find number of hot pairs. 
// Hot pair here signifies the pair (i, j) where i < j and arr[i] is equal to arr[j]

// var arr=[1,2,3,4,5,6,7,8];
// var i=0,j=0;
