var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
var arr=[];
function convertListToObject(obj) {

  
    for(var i in obj)
    {
arr.push([i,obj[i]])

    }
    console.log(arr)
}
convertListToObject(obj);
