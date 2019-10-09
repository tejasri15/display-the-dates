var moment = require('moment');


// get current date
var curr = new Date;

// First day is the day of the month - the day of the week
var first = curr.getDate() - curr.getDay();

// last day is the first day + 6
var last = first + 6;

// read the week strating date
var firstday = new Date(curr.setDate(first)).toUTCString();

// read the week ending date
var lastday = new Date(curr.setDate(last)).toUTCString();
// display the dates in console...
console.log('week starting date:', firstday, '\n', 'week ending date', lastday, "\n\n\n");

console.log('***********DISPLAY THE WEEK STARTING DATE AND ENDING DATE USING PREDEFINED FUNCTIONS*************')
// using predifened functions:
var startOfWeek = moment().startOf('week').format('DD-MM-YYYY');
var endOfWeek = moment().endOf('week').format('DD-MM-YYYY');

console.log(startOfWeek, endOfWeek); 