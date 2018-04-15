// Udacity Practice JavaScript Stuff

/*

let price = 15.00;  //price of our hammer
let money = 20.00;  //how much mone I have

if (money >= price) {
  console.log('buy the hammer');
} else {
  console.log('save more money and come back');
}

*/

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
