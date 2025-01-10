// Try to have some variable
const grades = 90;
const attendance = 90;

const passedGrade = grades > 75;
document.writeln(passedGrade); // true
const passAttendance = attendance > 75;
document.writeln(passAttendance); // true

const passed = passedGrade && passAttendance; // true & true = true
document.writeln(`: so, true && true = ${passed}`); // the result, true.
