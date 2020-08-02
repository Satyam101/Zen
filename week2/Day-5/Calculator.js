class calculator{
    
constructor(num1,num2)
{
this.num1=num1;
this.num2=num2;

}
add(x,y)
{this.x=this.num1;
    this.y=this.num2;

    return this.x+this.y;
}
sub(p,q){
    this.p=this.num1;
    this.q=this.num2;
return this.p-this.q;

}
multiply(a,b)
{this.a=this.num1;
    this.b=this.num2;
return this.a*this.b;

}
divide(c,d){
    this.c=this.num1;
    this.d=this.num2;
return this.c/this.d;

}

}
var cal1=new calculator(20,10);
console.log(cal1.add());
console.log(cal1.sub());
console.log(cal1.multiply());
console.log(cal1.divide());
