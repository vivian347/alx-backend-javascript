const readDatabase = require('../utils');

export default class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('This is the list of our students\n');
    readDatabase('./database.csv').then((data) => {
      response.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')} \n`);
      response.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')} \n`);
      response.end();
    }).catch((e) => {
      response.write(e.message);
    })
      .finally(() => {
        response.end();
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.write('Major parameter must be CS or SWE\n');
      response.end();
    }
    response.statusCode = 200;
    readDatabase('./database.csv').then((data) => {
      response.write(`List: ${data[major].join(', ')}\n`);
    }).catch((e) => response.write(e.message))
      .finally(() => {
        response.end();
      });
  }
}
