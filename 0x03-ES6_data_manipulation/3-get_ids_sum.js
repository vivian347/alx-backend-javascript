export default function getStudentIdsSum(students) {
  const initialVal = 0;
  return students.reduce((accumulator, student) => accumulator + student.id, initialVal);
}
