// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generate Password
function generatePassword() {
  // Password length variable
  var pwLength = prompt("How many characters would you like your password to contain?");

  // Rejects password length if not chosen between 8 and 128
  if (pwLength < 8 || pwLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please try again.");
  }

  // Variables for user password requirements
  var special = confirm("Click OK to include special characters.");
  var numeric = confirm("Click OK to include numeric characters.");
  var lowerCase = confirm("Click OK to include lowercase characters.");
  var upperCase = confirm("Click OK to include uppercase characters.");

  // Rejects password if none of the requirements are chosen
  if (special === false && numeric === false && lowerCase === false && upperCase === false) {
    alert("You must choose at least one character type. Please try again.");
  }

  // Variables for all possible characters
  var specialChars = "~!@#$%^&*()_+-={} []";

  
  
  var numericChars = "1234567890";
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pwCharSet = "";
  var pwString = "";

  // Adds characters to the character set based on user choices
  if (special === true) {
    pwCharSet += specialChars;
  }

  if (numeric === true) {
    pwCharSet += numericChars;
  }

  if (lowerCase === true) {
    pwCharSet += lowerCaseChars;
  }

  if (upperCase === true) {
    pwCharSet += upperCaseChars;
  }

  // Generates password string
  for (var i = 0; i < pwLength; i++) {
    pwString += pwCharSet.charAt(Math.floor(Math.random() * pwCharSet.length));
  }

  return pwString;
}