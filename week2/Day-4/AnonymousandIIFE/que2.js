//Anonymous

var res=function(str)
{
    var str = 'HeRe is a MIXED capitalization StRiNg.';

    str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log(str.join(" "))
}
res();






 //IIFE
 (function() {
    var str='HeRe is a MIXED capitalization StRiNg.';
    str=str.toLowerCase().split(" ");
  
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }


console.log(str.join(" "));
})();   