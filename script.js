// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() { 
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "#$%&\'()*+,-./:;<=>?@[]^_`{|}~";
  var numeric = "0123456789";

  var possibleChar = "";
  var password = "";

  var passwordLength = parseInt(prompt("How many characters long would you like your password to be? Choose a number between 8 and 128"));

  if (!passwordLength) {
    alert('Please enter a number!');
    return '';
  }

  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128!");
    return '';
  }

  // else if (typeof passwordLength !== "number") {
  //   alert("Please enter a number!");
  //   return '';
  // }

  else {
    var hasLower = confirm('Do you want lowercase letters?');
    var hasUpper = confirm('Do you want uppercase letters?');
    var hasSpecial = confirm('Do you want special characters?');
    var hasNumeric = confirm('Do you want numbers?');
  }
  
  if (!hasLower && !hasUpper && !hasSpecial && !hasNumeric) {
    alert("Please include at least one characteristic!");
    return '';
  }

  if (hasLower) {
  possibleChar += lower;
  }
  if (hasUpper) {
  possibleChar += upper;
  }
  if (hasSpecial) {
  possibleChar += special;
  }
  if (hasNumeric) {
  possibleChar += numeric;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);