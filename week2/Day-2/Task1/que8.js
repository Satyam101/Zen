var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], 
['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'],
 ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
var obj={};

function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 for(var i=0;i<arr.length;i++)
{
    var inside=[];
    inside=arr[i];
for(var j=0;j<inside.length;j++)
{
let key=inside[j][0];
let val=inside[j][1];
obj[key]=val;
}

tranformEmployeeList.push(obj);
}

 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr));




