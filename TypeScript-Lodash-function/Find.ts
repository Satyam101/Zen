let arr = [11, 25, 23, 14, 52, 16, 37, 18, 92];


function Find(arr, MyFunc) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let Output = MyFunc(arr[i]);
        if (Output) {
            temp.push(arr[i]);
        }

    }
    return temp;
}
console.log(Find(arr, number => number < 25));
