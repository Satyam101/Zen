
var mainDiv=document.createElement('div');

var text1= document.createElement('input');
text1.type='text';
text1.id='text1';
mainDiv.append(text1);

var button1=document.createElement('button');
button1.type='submit';
button1.id='but1';
button1.setAttribute('onclick','f1()');
button1.innerText='Get Song';
mainDiv.append(button1);


document.body.append(mainDiv)



 async function f1(){

        var inputurl=document.getElementById('text1').value;
console.log(inputurl);

    await fetch("https://5f3f67b044212d0016fecb08.mockapi.io/songs");
     method: 'POST';
          
     body: JSON.stringify({
       url: `${inputurl}`  
     })
console.log('url sent');
}



