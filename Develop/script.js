// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password variable that we want to return
var password = ""

// Generate Password function
function generatePassword () {
  console.log("Clicked the button")

  // Prompt the user
  
  var passwordLength = prompt("How long do you want your password to be?"); 
  
  if (passwordLength < 8) {
    alert("The password must be at least 8 characters.")
  } else (passwordLength > 128); {
    alert("The password must be no more than 128 characters.")
  }

  if (passwordLength >= 8, passwordLength <=128); {
    var lower = confirm("Do you want to include lower case letters?");
    var upper = confirm("Do you want to include upper case letters?");
    var num = confirm("Do you want to include numbers?");
    var special = confirm("Do you want to include speacial characters?");
  }

   // If else statements for character criteria
   if (lower === true) {
    var lowerChar = "abcdefghijklmnopqrstuvwxyz"
    console.log(true)
  } else (lower === fasle); {
    console.log(false);
  }
    
  if (upper === true) {
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log(true)
  } else (upper === false); {
    console.log(false);
  }
  if (num === true) {
    var numChar = "0123456789"
    console.log(true)
  } else (num === false); {
    console.log(false);
  }

  if (special === true) {
    var specialChar = " !'#$%&()*+,-./:;<=>?@[]\^_`{|}~"
    console.log(true)
  } else (special === false); {
    console.log(false);
  }

  //Randomly generating character criteria
 
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * lowerChar.length);
    password += lowerChar.substring(randomNumber, randomNumber + 1);
    var randomNumber = Math.floor(Math.random() * upperChar.length);
    password += upperChar.substring(randomNumber, randomNumber + 1);
    var randomNumber = Math.floor(Math.random() * numChar.length);
    password += numChar.substring(randomNumber, randomNumber + 1);
    var randomNumber = Math.floor(Math.random() * specialChar.length);
    password += specialChar.substring(randomNumber, randomNumber + 1);

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
