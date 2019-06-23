/* switch case*/

/*switch (value) { // switch keyword is used to create a switch conditional statement and pass the value.	
	case val1 :
		//some code
		break;

	case val2 :
		//some code
		break;

	default :
		//some code
} */

/*var x = 3;

switch ( x ) {
	case 1 :
		console.log("value of x = 1");
		break;

	case 2 :
		console.log("value of x = 2");
		break;

	case 3 :
		console.log("value of x = 3");
		break;

	case 4 :
		console.log("value of x = 4");
		break;

	default :
		console.log("value of x something else");
}
*/
/* multiple case sharing*/
var x = 4;

switch ( x ) {
	case 1 :
	case 2 :
		document.write("value of x <= 2");
		break;

	case 3 :
	case 4 :
		document.write("value of x >= 3 and x <= 4");
		break;

	default :/*this is jst life else case*/
		document.write("value of x something else");
}