function getRandomNumber() {
  var randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

alert( getRandomNumber() );
console.log( getRandomNumber() );

function isEmailEmpty() {
	let field = document.getElementsById('email');
	if (field.value === '') {
		return true;
	}	else {
			return false;
	}
}

let fieldTest = isEmailEmpty();
	if (fieldTest === true) {
		alert('Please provide your email address.');
	}
