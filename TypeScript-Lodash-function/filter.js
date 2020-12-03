var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function MyFunc(arr, FilterData) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var Output = FilterData(arr[i]);
        if (Output) {
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(MyFunc(arr, function (element) { return element % 2 === 0; }));
