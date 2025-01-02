// In array
const data = ["Rama", "22", "Male"];

for (const eachData of data) {
  // each data in data array
  document.writeln(`<p>${eachData}</p>`);
}

document.writeln("</br>");
document.writeln("</br>");

// in String since String is iterable data
{
  const data = "RAMA PUTRA";

  for (const eachData of data) {
    // eachData which is CHARACTER in String
    document.writeln(`<p>${eachData}</p>`);
  }
}
