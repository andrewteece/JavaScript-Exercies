// Random Number Challange

/*
function getRandomNumber ( lower, upper) {
	return random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log( getRandomNumber( 1, 6));
console.log(getRandomNumber(1, 250));
console.log(getRandomNumber(1, 443));
*/

/////////////////
// Random Number Challange Part 2
/////////////////

function getRandomNumber ( lower, upper) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error('Both arguments must be numbers');
  }
	return random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

console.log( getRandomNumber( 1, 100 ));
console.log( getRandomNumber('nine', 24 ));
console.log( getRandomNumber( 200, 75462 ) );
console.log(getRandomNumber( 1000, 20000 ));
console.log( getRandomNumber( 50, 'one-hundred' ));
