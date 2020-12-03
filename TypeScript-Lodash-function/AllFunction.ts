var baseDiv = document.createElement('div');
baseDiv.id = "mainDiv";

var heading = document.createElement('h2');
heading.innerText = 'Que No.1  Find Function';
baseDiv.append(heading);

var queDiv = document.createElement('div');

queDiv.innerText = `
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

`
baseDiv.append(queDiv);
var outputhead = document.createElement('h3');
outputhead.id = 'outputDiv';
baseDiv.append(outputhead);
outputhead.innerText = 'Output is [11, 23, 14, 16, 18]'

var line = document.createElement('hr');
line.id = "line";
baseDiv.append(line);
//-----------------chunk----------------------------
var heading = document.createElement('h2');
heading.innerText = 'Que No.2  Chunk Function';
baseDiv.append(heading);

var queDiv = document.createElement('div');

queDiv.innerText = `
let ArrElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Chunk(ArrElements, sizeOfChunk) {
    let temp = [];
    let j=0;
if(sizeOfChunk<=0){
    return temp;
}
while(ArrElements.length){

temp[j++]=ArrElements.splice(0,sizeOfChunk);
}
return temp;

}

console.log(Chunk(ArrElements, 3));


`
baseDiv.append(queDiv);
var outputhead = document.createElement('h3');
outputhead.id = 'outputDiv';
baseDiv.append(outputhead);
outputhead.innerText = 'Output is [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]';

var line = document.createElement('hr');
line.id = "line";
baseDiv.append(line);
//-------------Filter-----------------------
var heading = document.createElement('h2');
heading.innerText = 'Que No.3  Filter Function';
baseDiv.append(heading);

var queDiv = document.createElement('div');

queDiv.innerText = `
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


`
baseDiv.append(queDiv);
var outputhead = document.createElement('h3');
outputhead.id = 'outputDiv';
baseDiv.append(outputhead);
outputhead.innerText = 'Output is [ 2, 4, 6, 8, 10 ]';

var line = document.createElement('hr');
line.id = "line";
baseDiv.append(line);
//----------Reduce-----------------------------------
var heading = document.createElement('h2');
heading.innerText = 'Que No.4  Reduce Function';
baseDiv.append(heading);

var queDiv = document.createElement('div');

queDiv.innerText = `
let arrData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Reduce(arrData, MyFunc,accumulator) {
    for (let i = 0; i < arrData.length; i++) {
        accumulator = MyFunc(accumulator, arrData[i]);
    }

    return accumulator;
}

console.log(Reduce(arrData, (sum, n) => sum + n,0));


`
baseDiv.append(queDiv);
var outputhead = document.createElement('h3');
outputhead.id = 'outputDiv';
baseDiv.append(outputhead);
outputhead.innerText = 'Output is 55';

var line = document.createElement('hr');
line.id = "line";
baseDiv.append(line);

//--------------Sum-------------------------
var heading = document.createElement('h2');
heading.innerText = 'Que No.5  Sum Function';
baseDiv.append(heading);

var queDiv = document.createElement('div');

queDiv.innerText = `

let MySum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
     {
        sum = sum + arr[i];
    }
return sum;
}
console.log(MySum([11,2,3,4,5]));


`
baseDiv.append(queDiv);
var outputhead = document.createElement('h3');
outputhead.id = 'outputDiv';
baseDiv.append(outputhead);
outputhead.innerText = 'Output is 25';


document.body.append(baseDiv);
