// Write a program that displays current date and time in
// your browser.
var now = new Date();

var datetimeString = now.toLocaleString();

console.log("Current Date and Time:", datetimeString);




// Write a program that alerts the current month in words.
// For example December.

// Get the current date
var now = new Date();

var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var monthIndex = now.getMonth();

var currentMonth = monthNames[monthIndex];

alert("Current Month: " + currentMonth);




// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var now = new Date();

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var dayIndex = now.getDay();

var currentDay = dayNames[dayIndex];

alert("First 3 letters of current day: " + currentDay);


// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


var now = new Date();

var dayIndex = now.getDay();

if (dayIndex === 6 || dayIndex === 0) {
    alert("It's Fun day!");
} else {
    alert("It's not Fun day.");
}



// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var now = new Date();

var dayOfMonth = now.getDate();

if (dayOfMonth <= 15) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}



// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var currentDate = new Date();
console.log("Current Date:", currentDate);

var january1_1970 = new Date(1970, 0, 1);

var elapsedMilliseconds = currentDate - january1_1970;
console.log("Elapsed Milliseconds since January 1, 1970:", elapsedMilliseconds);

var elapsedMinutes = elapsedMilliseconds / (1000 * 60);
console.log("Elapsed Minutes since January 1, 1970:", elapsedMinutes);



// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// Get the current date
var now = new Date();

var currentHour = now.getHours();

if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}


// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date(2020, 11, 31);
console.log("Last day of the last month of 2020:", laterDate);



// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramadanStart = new Date(2015, 5, 18);

var currentDate = new Date();

var difference = currentDate - ramadanStart;

var daysPastSinceRamadanStart = Math.floor(difference / (1000 * 60 * 60 * 24));

alert("Number of days past since 1st Ramadan 2015: " + daysPastSinceRamadanStart);


// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


var beginningOf2015 = new Date(2015, 0, 1);

var currentDate = new Date();

var differenceInSeconds = Math.abs(currentDate - beginningOf2015) / 1000;

console.log("Seconds elapsed between the reference date and the beginning of 2015:", differenceInSeconds);




// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


var currentDateAndTime = new Date();

var currentHour = currentDateAndTime.getHours();

currentDateAndTime.setHours(currentHour + 1);

console.log("Date object an hour ahead:", currentDateAndTime);



// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var date100YearsBack = new Date();
date100YearsBack.setFullYear(date100YearsBack.getFullYear() - 100);

alert("Date 100 years back: " + date100YearsBack);



// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


var age = prompt("What is your age?");

var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

document.write("You were born in " + birthYear);




// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


var customerName = "John Doe";
var currentMonth = "May";
var numberOfUnits = 250;
var chargesPerUnit = 10;
var latePaymentSurcharge = 2.5;

var netAmountPayable = numberOfUnits * chargesPerUnit;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

document.write("<h1>K-Electric Bill</h1>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Current Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + numberOfUnits + "</p>");
document.write("<p>Charges per Unit: $" + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable.toFixed(2) + "</p>");
document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable.toFixed(2) + "</p>");

