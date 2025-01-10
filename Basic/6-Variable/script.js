// Use var keyword
var fullName; // Declare variable
fullName = "Rama Adi Putra"; // Init the variable with string data "Rama"
fullName = "Assela Zeniffia Sutrisno"; // Change the value of the variable with another string "Assela"
document.writeln(fullName); // It will show "Assela Zeniffia" because we already change the value of fullName variable, not "Rama" anymore

document.writeln("</br>"); // Enter

// We can straight init the variable after declare it, no need to have seperate line like the example up here.
var firstName = "Rama"; // declare + init
document.writeln(firstName);

document.writeln("</br>"); // Enter

// NOW USE LET, change var to let
let fullName2 = "Rama Adi Putra";
fullName2 = "Assela Zeniffia Sutrisno"; // use let we can change the value
document.writeln(fullName2);

// Try use CONST and then try to change the value
const goal = "Learn Javascript";
goal = "Too lazy to learn Javascript"; // Error
document.writeln(goal); // Will not executed & will throw an Error in console
// That means: Learn javascript is constant, can't choose to be lazy instead. :D
