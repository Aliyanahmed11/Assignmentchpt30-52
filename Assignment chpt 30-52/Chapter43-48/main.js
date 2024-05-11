// Show an alert box on click on a link.
function showAlert() {
    alert("You clicked the link!");
}


// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function showMessage() {
    alert("You clicked on the mobile image!");
}


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}



// Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function changeImage(imageSrc) {
    document.getElementById('myImage').src = imageSrc;
}


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


var counter = 0;
var counterElement = document.getElementById('counter');

function increaseCounter() {
    counter++;
    counterElement.textContent = counter;
}

function decreaseCounter() {
    counter--;
    counterElement.textContent = counter;
}