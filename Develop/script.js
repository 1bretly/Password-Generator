// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Strings
let alphaLow = "abcdefghijklmnopqrstuvwxyz";
let alphaHigh = "ABCDERFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*";

// function writePassword is called
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Cunction generatePassword is called
function generatePassword() {
  // Created a console.log for button
  console.log("You clicked the button!");

  // Define passwordLength with prompt
  let passwordLength = (prompt("How many characters would you like your password to be? Between 8-128"));

  while (passwordLength <= 7 || passwordLength >= 128) {
    alert("Your password length must be between 8-128 characters!");
    let passwordLength = (prompt("How many characters would you like your password to be? Between 8-128"));
  }
  // Confirmation on password length
  alert(`Your password will have ${passwordLength} characters`);

  // Determine password parameters. (lowercase, uppercase, #s, special)
  let confirmationLower = confirm("Click OK if you would like to include lowercase characters?");
  let confirmationUpper = confirm("Click OK if you would like to include uppercase characters?");
  let confirmationNumbers = confirm("Click OK if you would like to include numbers?");
  let confirmationSpecial = confirm("Click OK if you would like to include special characters?");
  while (confirmationLower === false && confirmationUpper === false && confirmationNumbers === false && confirmationSpecial === false) {
    alert("Hey IDIOT, you must choose at least one parameter!");
  }

  // 2) Validate the input

  // 3) Display the generated password on the page

  return "Generated password will go here!"
}



// let passwordLength = 0;
// while (passwordLength < 8 || passwordLength > 128) {
//   passwordLength = window.prompt("How many characters would you like your password to be?");
//   console.log(passwordLength)
//   if g





