function getFullName(firstName, lastName){
    // your code here
    let out="";
    let myout=" ";
    let comma1='"';
    let comma2='"';
    if(lastName=="")
    {
     
    out=comma1+out+firstName+lastName+comma2;   
    }else{
    out=comma1+out+firstName+myout+lastName+comma2;}
    return out;

   }
   console.log(getFullName('GUVI','GEEK'));