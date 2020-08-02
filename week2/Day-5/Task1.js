//Movie-Basic



class movie {
    constructor(title,studio,rating="PG"){

            this.title=title;
            this.studio=studio;
            this.rating=rating;
}

  getPG(arr)
    {
    var temp=new Array();
    var j=0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i].rating==("PG"))
        {
    temp[j++]=arr[i];
    
        }
    }
    return temp;
    
    }
}

var film1= new movie("Casino Royale","Eon Productions","PG");
var film2= new movie("horror","Fox Studio","PG");
var film3= new movie("MAD","ABC Production","A");
var film4= new movie("parasite","xyz Productions","PG13");
var film5= new movie("fast and furious","pqr Productions","PG");
var film6= new movie("avengers","G Productions","B");
var film7= new movie("Battleship","A Productions","C");
var film8= new movie("1920","Y Productions","D");
var film9= new movie("xyz","Z Productions","PG");
var film10= new movie("abc","V Productions","A");
var arr=[film1,film2,film3,film4,film5,film6,film7,film8,film9,film10];

m1=new movie();
console.log(m1.getPG(arr));


