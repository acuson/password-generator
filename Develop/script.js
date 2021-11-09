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

function generatePassword () {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !'#$%&()*+,-./:;<=>?@[]\^_`{|}~";
  var passwordLength = []
    for (var i = 8; i <= 128; i++) {
      passwordLength.push
    }
  var password = "";
  return password;
}