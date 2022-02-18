// const newStudent = {}

const createStudent = (studentName, studentGrade) => {
  const newStudent = {
    name: studentName,
    grade: studentGrade
  }
  return newStudent
}
// createStudent("John", 5)
// console.log(newStudent)
const addMathGrade = (newStudent) => {
  newStudent.math = "B"

  return newStudent
}/++
//////////
/

const addHistoryGrade = (newStudent) => {
  newStudent.history = "C"

  return newStudent
}

const addScienceGrade = (newStudent) => {
  newStudent.science = "A"

  return newStudent
}

const currentStudent = () => { 
  let student = createStudent("john", 5)
  addMathGrade(student)
  addHistoryGrade(student)
  addScienceGrade(student)

  return student
}

console.log(currentStudent())