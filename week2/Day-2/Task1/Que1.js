var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],

    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ],
    height : 20,
    weight:50

}
   
//1.
 console.log("Height and weight of cat is "+cat.height+" "+cat.weight);
   
//2.
cat.name="Fluffyy"
console.log("name of the cat is updated to "+cat.name);

//3.
console.log("there activities are  "+cat.catFriends[0].activities+" "+cat.catFriends[1].activities);

//4.
console.log("cat Friends names are "+cat.catFriends[0].name+" "+cat.catFriends[1].name)
//5.
console.log("Total weight of bar and foo is "+ +(cat.catFriends[0].weight+cat.catFriends[1].weight));
//6.
console.log("Activities of all cats are "+cat.activities+" "+cat.catFriends[0].activities+" "+cat.catFriends[1].activities);
//7.
cat.catFriends[0].activities[2]="very active";
cat.catFriends[1].activities[2]=" very cute"
console.log("added activities of the bar are "+cat.catFriends[0].activities+" and foo are "+cat.catFriends[1].activities);
//8.
cat.catFriends[0].furcolor="Pink";
console.log("fur color is updated to "+cat.catFriends[0].furcolor)