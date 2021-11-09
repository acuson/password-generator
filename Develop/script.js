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

var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !'#$%&()*+,-./:;<=>?@[]\^_`{|}~";
var passwordLength = prompt("How long do you want your password to be?") 
var password = "";

if (passwordLength < 8) {
  confirm("The password must be at least 8 characters.");
} else if (passwordLength > 128); {
  confirm("The password must be no more than 128 characters.");
}

var lower = confirm("Do you want to include lower case letters?");
var upper = confirm("Do you want to include upper case letters?");
var num = confirm("Do you want to include numbers?");
var special = confirm("Do you want to include speacial characters?");

function generatePassword () {
  return password;
}