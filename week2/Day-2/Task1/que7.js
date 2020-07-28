var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let i = 0 ; i < arr.length; i++){
 	let key = arr[i][0];
 	let val = arr[i][1];
 
 	newObject[key] = val;
 }
 
 //console.log(newObject);
 return newObject;
}

var out = fromListToObject(arr);
console.log(out);