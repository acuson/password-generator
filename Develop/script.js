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

// var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !'#$%&()*+,-./:;<=>?@[]\^_`{|}~";

// var password = "";

// function getPasswordInfo () {
  
// }

function generatePassword () {
  var passwordLength = prompt("How long do you want your password to be?") 
  if (passwordLength < 8) {
    alert("The password must be at least 8 characters.")
  } else if (passwordLength > 128) {
    alert("The password must be no more than 128 characters.")
  } else (passwordLength >= 8, passwordLength <=128); {
    var lower = confirm("Do you want to include lower case letters?");
    var upper = confirm("Do you want to include upper case letters?");
    var num = confirm("Do you want to include numbers?");
    var special = confirm("Do you want to include speacial characters?");
  }
 
  return password;
}