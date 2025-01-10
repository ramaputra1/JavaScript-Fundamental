// Using if else
let paramter;

let data = paramter;
if (data === undefined || data === null) {
  data = "It's Default Value (If Else)";
}

document.writeln(`${data}`);

document.writeln("<br>");

{
  let paramter;
  const data = paramter ?? "It's Default Value (Nullish Operator"; // Without the :, only one value to show if it's an nullish value

  document.writeln(`${data}`);
}
