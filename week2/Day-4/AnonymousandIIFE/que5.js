// //Return all the palindromes in an array
// var res=function(arr){

//     arr=[121,232,122,123,321];
//     arr=arr
//     console.log(arr)
//     //for(var)
// }
// res();

function isPalindrome( N) 
    { 
        var str = "" + N; 
        var len = str.length; 
        for (var i = 0; i < len / 2; i++) { 
            if (str.charAt(i) != str.charAt(len - 1 - i)) 
                return false; 
        } 
        return true; 
    } 
  
    // Function to check 
    // if an array is PalinArray or not 
    function isPalinArray( arr, n) 
    { 
        // Traversing each element of the array 
        // and check if it is palindrome or not 
        for (var i = 0; i < n; i++) { 
            var ans = isPalindrome(arr[i]); 
            if (ans == false) 
                return false; 
        } 
        return true; 
    } 
    var arr=[121,232,111]
  console.log(isPalinArray(arr,4));