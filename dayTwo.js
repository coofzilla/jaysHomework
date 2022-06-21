// make a function that RECEIVES a function as a argument
// inner function will take object studentGenerator
// add ANOTHER property to that object

//better version
function studentGenerator(studentName, age, hobby = "reading") {
  return {
    studentName,
    age,
    hobby,
  };
}

//console.log(studentGenerator("경은", "25", "coding"));

// function editStudent(student) {
//   //edit this student
//   //return edited student
//   return student;
// }

const student = studentGenerator("경은", "25", "coding");

//https://dmitripavlutin.com/javascript-shallow-clone-objects/

const editStudent = {
  ...student,
  studentName: "형주",
  class: "C17",
};

console.log(editStudent);
