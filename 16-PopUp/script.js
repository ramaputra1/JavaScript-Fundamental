// Actually to use this popup is as simply as this:

// alert("This is Alert")
// prompt("What is your name: ")
// confirm("Are you good?")

// But in real life or good way we use this:

const name = prompt("Your name? (It's Prompt)"); // prompt (Ask input)
const start = confirm(
  "Do you want to start explore this website? (It's Confirm)"
); // confirm (Ask input in boolean)
if (start) {
  alert(`Hi ${name}, Welcome - (It's Alert)`); // alert
} else {
  alert(`Ok ${name}, Bye bye - (It's Alert)`); // alert
}
