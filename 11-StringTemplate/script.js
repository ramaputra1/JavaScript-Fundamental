// Create the variables
const name = "Rama Adi Putra";
const firstName = "Rama";
const middleName = "Adi";
const lastName = "Putra";
// Use the string template
const template = `Name : ${firstName} ${middleName} ${lastName}`; // use ` ` and ${nameOfVar}
const notTemplate = "Name : " + firstName + " " + middleName + " " + lastName; // Not template string way

console.info(template);

const nilai = 50;
const template2 = `Name : ${name}, Lulus : ${nilai > 70}`; // We can also use expression with string template

console.info(template2);

// We also can use multiline, just use enter like ussualy
const multiline = `Nama Saya Rama,
Sekarang Kerja,
Sering Juga Bikin KOnten Programming,
Kalo lagi males, paling tidur`;

document.writeln("<pre>");
document.writeln(multiline);
document.writeln("</pre>");
