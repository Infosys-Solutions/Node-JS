console.log('App Starting..');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');


var res = notes.addNumber(5, 4);
console.log(res);
// var user = os.userInfo();


// // fs.appendFile('greetings.txt', 'Hello Man...!');

// fs.appendFile('greetings.txt', `Hello Man....${user.username} !`);

console.log('hello', 'world');

console.log('App Closed...!');