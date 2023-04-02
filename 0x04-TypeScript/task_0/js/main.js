var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 15,
    location: "Zambia"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 13,
    location: "Zambia"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
// create table header
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "firstName";
headerRow.appendChild(firstNameHeader);
var locationHeader = document.createElement("th");
locationHeader.textContent = "location";
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
// create row foe each element
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.location;
});
document.body.appendChild(table);
x = 10;
x++;
console.log(table)
console.log(x);