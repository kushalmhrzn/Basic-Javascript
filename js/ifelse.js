/*var x = 10;

console.log("x = " + x);

if ( x > 0 ) {
	console.log("x is greater than 0");
}

console.log("End of code");
*/

/*
var y = 10;

console.log("y = " + y);

if ( y > 0 ) {
	console.log("y is greater than 0");
}

console.log("End of code");
*/
/* nested if/else*/
var x = 10;
var y = 20;

if ( x > 100 ) {
	
	if ( y > x ) {
		console.log("y is greater than x");
	} else if ( y == x ) {
		console.log("y is equal to x");
	} else {
		console.log("y is less than x");
	}

} else {
	console.log("x is not greater than zero");
}