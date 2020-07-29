var obj = {
    mykey: 'value'
   };
function removeProperty(obj, key){
    // your code here

  obj.mykey=undefined;
  
 obj = JSON.parse(JSON.stringify(obj ));
 return obj; 
}
   console.log(removeProperty(obj,'mykey'))