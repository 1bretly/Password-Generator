// Assignment Code 
// Button & event listener
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Arrays
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?", "/"];

// Empty string for let passwordLengths
let passwordLength = "";

// Function writePassword is ran when button is clicked
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function generatePassword is ran
function generatePassword() {

  // Define passwordLength with prompt
  let passwordLength = prompt("How many characters would you like your password to be? Between 8-128");
  if (passwordLength === null) {
    return "";
  }

  while (passwordLength <= 7 || passwordLength >= 129) {
    alert("Your password length must be between 8-128 characters!");

    passwordLength = prompt("How many characters would you like your password to be? Between 8-128");

    if (passwordLength === null) {
      return "";
    }
  }
  // Confirmation on password length
  alert(`Your password will have ${passwordLength} characters`);

  // Determine password parameters. (lowercase, uppercase, #s, special)
  let confirmationLower = confirm("Click OK if you would like to include lowercase characters?");
  let confirmationUpper = confirm("Click OK if you would like to include uppercase characters?");
  let confirmationNumber = confirm("Click OK if you would like to include numbers?");
  let confirmationSpecial = confirm("Click OK if you would like to include special characters?");
  while (confirmationLower === false && confirmationUpper === false && confirmationNumber === false && confirmationSpecial === false) {
    alert("Choose at least one parameter!");

    confirmationLower = confirm("Click OK if you would like to include lowercase characters?");
    confirmationUpper = confirm("Click OK if you would like to include uppercase characters?");
    confirmationNumbers = confirm("Click OK if you would like to include numbers?");
    confirmationSpecial = confirm("Click OK if you would like to include special characters?");
  }

  let passwordCharacters = []

  if (confirmationLower) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmationUpper) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  if (confirmationNumber) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmationSpecial) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }

  console.log(passwordCharacters);

  // Empty string that will be filled by for loop outcome
  let randomPassword = ""

  for (let i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword
}