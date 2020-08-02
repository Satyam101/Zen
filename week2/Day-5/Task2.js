class Circle{
	constructor(radius,color){
		if(arguments.length == 0) {
            
        }else if(arguments.length == 1){
            this.radius = radius;
        }else{
        	this.radius = radius;
		    this.color = color;
        }
		
	}

	get radius(){
		return this.radius;

	}

	set radius(r){
		this.radius = r;

	}

	get color(){
		return this.color;

	}

	set color(c){
		this.color = c;

	}

	toString(){

	}

	getArea(){

	}

}