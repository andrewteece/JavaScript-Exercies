
//
// Udacity Practice JavaScript
//

/*

let price = 15.00;  //price of our hammer
let money = 20.00;  //how much mone I have

if (money >= price) {
  console.log('buy the hammer');
} else {
  console.log('save more money and come back');
}

////////////////////////////////////////

let runner = 'Andrea';
let position = 2;
let medal ;

if ( position === 1 ) {
    medal = 'gold';
} else if ( position === 2 ) {
    medal = 'silver';
} else if ( position === 3 ) {
    medal = 'bronze';
} else {
    medal ='you get a pat on the back';
}

console.log(runner + " received a " + medal + " medal.");
*/

////////////////////////////////////////

/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement

/*
let number = 2;

if (number % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}
*/

///////////////////////////////////////

/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
/*
let musicians = 1;

// your code goes here

if (musicians < 1) {
  console.log('not a group');
} else if (musicians === 1) {
    console.log('solo');
} else if (musicians === 2) {
    console.log('duet');
} else if (musicians === 3) {
    console.log('trio');
}  else if (musicians === 4) {
     console.log('quartet');
}  else {
    console.log('this is a large group');
}

*/

////////////////////////////////////////

let room = 'dining room';
let suspect = 'Mr. Parkes';

let weapon = '';
let solved = false;

if (room === 'ballroom') {
  weapon = 'poison'; solved = suspect === 'Mr. Kalehoff';
} else if (room === 'gallery') {
    weapon = 'trophy'; solved = suspect === 'Ms. Van Cleve';
} else if (room === 'billiards room') {
    weapon = 'pool stick'; solved = suspect === 'Mrs. Sparr';
} else {
  weapon = 'knife'; solved = suspect === 'Mr. Parkes';
}

if (solved) {
  console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}
