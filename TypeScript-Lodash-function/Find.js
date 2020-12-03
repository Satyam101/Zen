var arr = [11, 25, 23, 14, 52, 16, 37, 18, 92];
function Find(arr, MyFunc) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var Output = MyFunc(arr[i]);
        if (Output) {
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(Find(arr, function (number) { return number < 25; }));
