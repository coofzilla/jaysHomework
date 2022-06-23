// 1)  convert the functions to arrow functions
const studentGenerator = (studentName, age, hobby = "reading") => {
  return { studentName, age, hobby };
};

//console.log(studentGenerator("vera", 45, "coding"));

// 3) Create a function that makes an array of students that have been generated
function editStudent(studentGenerator) {
  let arr = new Array();
}

console.log(editStudent());

// 4) Think about how you would create random data for the studentGenerator
//      a) how can we create students without typing in information each time?
//      how can we automate this? so we can make 100 students if we wanted
