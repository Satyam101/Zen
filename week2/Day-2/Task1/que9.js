var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
	let isEqual = true;
	let keys = Object.keys(actual);
	console.log(keys) 
	for(let i = 0 ; i < keys.length ; i++){
			if(actual[keys[i]] != expected[keys[i]]){
				isEqual = false;
			}
	}
	return isEqual;
}

console.log(assertObjectsEqual(actual,expected));