// Write a function that displays current date & time in your
// browser.

function displayCurrentDateTime() {
    var now = new Date();
    alert("Current Date & Time: " + now);
}


// Write a function that takes first & last name and then it
// greets the user using his full name.


function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    alert("Hello, " + fullName + "!");
}

// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addNumbers(num1, num2) {
    return num1 + num2;
}



// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(num1, num2, operator) {
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
    alert("Result: " + result);
}


// 5. Write a function that squares its argument.

function square(num) {
    return num * num;
}

// 6. Write a function that computes factorial of a number.
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    var hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
    return Math.sqrt(hypotenuseSquared);
}



// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables


// With arguments as values
function calculateRectangleArea1(width, height) {
    return width * height;
}

// With arguments as variables
function calculateRectangleArea2() {
    var width = arguments[0];
    var height = arguments[1];
    return width * height;
}


// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeFirstLetterOfEachWord(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}


// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = '';
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}


// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of

// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2


// Calculate Circumference
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    alert("The circumference is " + circumference.toFixed(2));
}

// Calculate Area
function calcArea(radius) {
    var area = Math.PI * radius * radius;
    alert("The area is " + area.toFixed(2));
}
