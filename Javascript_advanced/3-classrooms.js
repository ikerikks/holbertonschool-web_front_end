
function createClassRoom (numberOfStudents) {
  const studentSeat = seat => () => seat;
  const students = [];

  for (let i = 0; i < numberOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
}

const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[12]());
