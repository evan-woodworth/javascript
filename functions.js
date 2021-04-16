// const professionals = ['👨🏽‍🏫', '👩‍🍳', '👨🏽‍🌾', '👨🏼‍⚖️'];
// const numbers = [1, 66, 48, 9, 23, 19, 20, 66, 30];
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const teams = ['Lakers', 'Nets', 'Clippers', 'Mavericks'];
// const storageUnit = ['art', 'pots', 'yearbook', 'shoes', 'lucky socks'];

// const addNumbers = function(numbersArray) {
//     let theSum = 0;
//     for (let i=0; i<numbersArray.length; i++){
//         theSum += numbersArray[i];
//     };
//     return theSum;
// };

// const theFunction = function (theString) {
//     console.log(theString);
// }

// vowels.forEach(theFunction);

// function checkInstagram(username) {
//     // write code and test
//     console.log(`Did ${username} post anything new?`);
// }
// function makePhoneCall(contact) {
//     // write code and test
//     console.log(`Calling ${contact}...`);
// }
// function playSpotify(song) {
//     // write code and test 
//     console.log(`Playing ${song}...`);
// }
// function checkEmail(emailProvider) {
//     // write code and test
//     console.log(`Checking emails from ${emailProvider}...`);
// }
// function sendEmail(message) {
//     // write code and test
//     console.log(`Sending ${message}...`);
// }
// function sendTextMessage(contact) {
//     console.log(`Yo, what's the word ${contact}`);
// }
// function takePicture(filter) {
//     console.log(`Take picture with ${filter} filter`);
// }
// function faceTime(friend) {
//     console.log(`Facetiming my friend ${friend}...`);
// }
// function useMobileDevice(typeOfPhone, funcName, param) {
//     let nameOfFunction = funcName.name;
//     if (typeOfPhone === 'Android' && nameOfFunction === 'faceTime') {
//         console.log('Facetime is only a feature on iPhones');
//         return;
//     }
//     console.log(`Use my ${typeOfPhone} to ${nameOfFunction}`);
//     funcName(param);
// }
// useMobileDevice('iPhone', sendTextMessage, 'Sebastian');
// console.log('---');
// useMobileDevice('Android', faceTime, 'Jake');
// console.log('---');
// useMobileDevice('iPhone', takePicture, 'portrait');
// console.log('---');
// useMobileDevice('iPhone', checkInstagram, 'Bob');
// console.log('---');
// useMobileDevice('iPhone', playSpotify, 'a song');
// console.log('---');
// useMobileDevice('iPhone', checkEmail, 'google');
// console.log('---');



// function cookFood(recipe, ingredients, tools) {
//     const theFinalDish = {
//         theFood: [],
//         dirtyDishes: [],
//         foodWaste: [],
//         leftoverIngredients: []
//     };
//     theFinalDish = recipe(theFinalDish, ingredients, tools);
//     return theFinalDish;
// }

setTimeout(
    function () {
        console.log("What even is 2000 milliseconds?");
    }, 2000
);

//excercise 1
let count = 10;
const countDown = setInterval(
    function () {
        if (count){
            console.log(count);
            count--;
        } else {
            console.log("Blast off!");
            clearInterval(countDown);
        }
    }, 1000
);

// //excercise 2
// function annoy() {
//     console.log('Are we there yet?');
//     setTimeout(annoy, 1000)
// }
// const kids = setTimeout(annoy, 1000);
