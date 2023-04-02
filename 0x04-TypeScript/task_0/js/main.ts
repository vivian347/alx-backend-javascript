interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 15,
    location: "Zambia"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 13,
    location: "Zambia"
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement("table");
// create table header
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "firstName";
headerRow.appendChild(firstNameHeader);
const locationHeader = document.createElement("th");
locationHeader.textContent = "location";
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// create row foe each element
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.innerText = student.firstName;
    locationCell.innerText  = student.location;
});

document.body.appendChild(table);

