var arr = ['GUVI', 'I', 'am', 'a geek'];

function transformFirstAndLast(arr) {
    var obj={};
    let start=arr[0];
 let end=arr[arr.length-1];
 obj[start]=end;
 return obj;
}
console.log(transformFirstAndLast(arr))
