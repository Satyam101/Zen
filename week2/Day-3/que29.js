console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt){

 var n = 0;
 var i = 2;
 
 while(n < nPrimes){
 	if (isPrime(i) && +i > +startAt){
 		console.log(n, " → ", i);
 		n++;
 	} 
 i++;
 }

}
// Returns true if a number is prime
function isPrime(n){

	if(n < 2) return false;
    for (var i = 2; i < n; i++) {
        if(n%i==0)
            return false;
    }
    return true;

}