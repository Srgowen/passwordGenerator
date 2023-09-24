// Get references to the #generate element and textarea
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Function to generate the random password
function generatePassword() {
  // Possible characters in password
  var charset = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:'\"<>,.?/";

  // Promts the user to enter password length
  var passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));

  // Validates the user inputed password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // Asks the user to specify what they want in the password, must have at least one
  if (confirm("Include lowercase characters?")) {
    charset += lowercaseChars;
  }

  if (confirm("Include uppercase characters?")) {
    charset += uppercaseChars;
  }

  if (confirm("Include numeric characters?")) {
    charset += numericChars;
  }

  if (confirm("Include special characters?")) {
    charset += specialChars;
  }

  // Generates the password based on the conditions set above
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Writes the generated password to the black space
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Makes the button interactive to start the password generation
generateBtn.addEventListener("click", writePassword);


