/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const studentLines = data.split('\n').filter((line) => line.trim() !== '');
    const lines = studentLines.slice(1);
    const filedCount = {};

    lines.forEach((line) => {
      const [firstName, lastName, age, field] = line.split(',');

      if (filedCount[field]) {
        filedCount[field].count++;
        filedCount[field].students.push(firstName);
      } else {
        filedCount[field] = {
          count: 1,
          students: [firstName],
        };
      }
    });
    console.log(`Number of students: ${lines.length}`);
    for (const field in filedCount) {
      if (Object.hasOwn(filedCount, field)) {
        const { count, students } = filedCount[field];
        const studentList = students.join(', ');
        console.log(`Number of students in Field ${field}: ${count}. List ${studentList}`);
      }
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
