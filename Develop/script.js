// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() { 
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var special = '#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
  var numeric = '0123456789';

  var passwordLength = prompt("How many characters long would you like your password to be? Choose a number between 8 and 128");

  if (!passwordLength) {
    alert('Please enter a number');
  }

  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128");
  }

  else {
    var hasLower = confirm('Do you want lowercase letters?');
    var hasUpper = confirm('Do you want uppercase letters?');
    var hasSpecial = confirm('Do you want special characters?');
    var hasNumeric = confirm('Do you want numbers?');
  }



  // if (hasLower) {
  // possible += lower;
  // }

}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
