export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((students) => students.location === city).map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (newGrade) {
      return { ...student, grade: newGrade.grade };
    }

    return { ...student, grade: 'N/A' };
  });
}
