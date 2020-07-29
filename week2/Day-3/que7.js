var arr = [1, 2, 3];
function hourToSeconds(arr) {

    for(var i in arr){
    arr[i]=arr[i]*60*60;
}
    return arr;
}
var data = hourToSeconds(arr)
console.log(data)