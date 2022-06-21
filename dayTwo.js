// make a function that RECEIVES a function as a argument
// inner function will take object studentGenerator
// add ANOTHER property to that object

function editStudent(student) {
  return {
    ...student,
    studentName: "형주",
    class: "C17",
  };
}

function studentGenerator(studentName, age, hobby = "reading") {
  return {
    studentName,
    age,
    hobby,
  };
}

const editedStudent = editStudent(studentGenerator("경은", 27, "coding"));

console.log(editedStudent);

//https://dmitripavlutin.com/javascript-shallow-clone-objects/
