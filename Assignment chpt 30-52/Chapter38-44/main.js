// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
    return Math.pow(a, b);
}


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}



// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calculateAreaOfTriangle(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}



// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


function mainFunction(mark1, mark2, mark3) {
    var average = calculateAverage(mark1, mark2, mark3);
    var percentage = calculatePercentage(mark1, mark2, mark3);
    console.log("Average:", average);
    console.log("Percentage:", percentage + "%");
}

function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

function calculatePercentage(mark1, mark2, mark3) {
    return ((mark1 + mark2 + mark3) / 300) * 100;
}




// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}



// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}



// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
function countSuccessiveVowels(text) {
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
        var char1 = text[i].toLowerCase();
        var char2 = text[i + 1].toLowerCase();
        if ("aeiou".includes(char1) && "aeiou".includes(char2)) {
            count++;
        }
    }
    return count;
}





// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// Convert Kilometers to Meters
function kmToMeters(km) {
    return km * 1000;
}

// Convert Kilometers to Feet
function kmToFeet(km) {
    return km * 3280.84;
}

// Convert Kilometers to Inches
function kmToInches(km) {
    return km * 39370.1;
}

// Convert Kilometers to Centimeters
function kmToCentimeters(km) {
    return km * 100000;
}





// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;
    var overtimeHours = Math.max(hoursWorked - regularHours, 0);
    var overtimePay = overtimeHours * overtimeRate;
    return overtimePay;
}
    



// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

function calculateCurrencyNotes(amount) {
    var notes100 = Math.floor(amount);
    var remainingAmount = amount - notes100 * 100;
    var notes50 = Math.floor(remainingAmount / 50);
    remainingAmount = remainingAmount % 50;
    var notes10 = Math.floor(remainingAmount / 10);
    console.log("100 Rupee Notes:", notes100);
    console.log("50 Rupee Notes:", notes50);
    console.log("10 Rupee Notes:", notes10);
}
