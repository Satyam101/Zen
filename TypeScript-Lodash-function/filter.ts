let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function MyFunc(arr, FilterData) {
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        let Output = FilterData(arr[i]);

        if (Output) {
            temp.push(arr[i]);
        }

    }
    return temp;
}

console.log(MyFunc(arr, element => element % 2 === 0));
