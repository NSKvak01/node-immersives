// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");
const firstName = getInput(0);
const lastName = getInput(1);
const fullName = firstName + ' ' + lastName;

console.log('Good evening ' + fullName);
console.log('Your capitalized name is ' + fullName.toLocaleUpperCase());
console.log('Your initials are '+ firstName[0] + '.' + lastName[0] + '.');
console.log('Your codeimersives email is ' + firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@codeimmersives.com');