{
  // Without With Statement
  const data = {
    name: "Rama",
    age: "22",
    gender: "Male",
  };

  document.writeln(data.name);
  document.writeln(data.age);
  document.writeln(data.gender);
}

document.writeln("<br>");
document.writeln("<br>");

// Using With Statement
{
  const data = {
    name: "Rama",
    age: "22",
    gender: "Male",
  };

  with (data) {
    document.writeln(name);
    document.writeln(age);
    document.writeln(gender);
  }
}
