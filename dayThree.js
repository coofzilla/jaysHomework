// 1)  convert the functions to arrow functions
const studentGenerator = (studentName, age, hobby = "reading") => {
  return { studentName, age, hobby };
};

const editStudent = (student) => {
  return {
    ...student,
    studentName: "형주",
    class: "C17",
  };
};

const editedStudent = editStudent(studentGenerator("경은", 27, "coding"));

console.log(editedStudent);

// 3) Create a function that makes an array of students that have been generated
const generatedStudentArray = editedStudent => Array.from(

)

// 4) Think about how you would create random data for the studentGenerator
//      a) how can we create students without typing in information each time?
//      how can we automate this? so we can make 100 students if we wanted


