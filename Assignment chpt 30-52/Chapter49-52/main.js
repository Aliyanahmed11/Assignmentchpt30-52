// Create a signup form and display form data in your web
// page on submission.


document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var userData = "First Name: " + formData.get("firstName") + "<br>" +
                    "Last Name: " + formData.get("lastName") + "<br>" +
                    "Email: " + formData.get("email") + "<br>";
    document.getElementById("userData").innerHTML = userData;
});



// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function showFullDetail() {
    var fullDetail = document.querySelector(".fullDetail");
    fullDetail.style.display = "block";
}



// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var student = {
        name: formData.get("name"),
        age: formData.get("age"),
        grade: formData.get("grade")
    };
    addStudentToTable(student);
    this.reset();
});

function addStudentToTable(student) {
    var table = document.getElementById("studentList");
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = student.name;
    cell2.innerHTML = student.age;
    cell3.innerHTML = student.grade;
    cell4.innerHTML = "<button onclick='deleteStudent(this)'>Delete</button> <button onclick='editStudent(this)'>Edit</button>";
}

function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editStudent(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    var name = cells[0].innerText;
    var age = cells[1].innerText;
    var grade = cells[2].innerText;
    document.getElementById("name").value = name;
    document.getElementById("age").value = age;
    document.getElementById("grade").value = grade;
}