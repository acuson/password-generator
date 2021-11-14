# 03 JavaScript: Password Generator

For this application, I am completing the JavaScript file to make a functional password generator. 

# Functionality
* Clicking the Generate Password button, the user will be prompt with how many characters they would like their password to be.
* If they type in a number that is not between 8 and 128, then they will be given an alert saying that the password must be at least 8 characters or no more than 128 characters.
* The user will confirm if they would like lower case, upper case, numbers, and special characters included in their password.
* After the user chooses their criteria, the generated password will appear in the container.

To make this functional, I completed the generatePassword function for it to return the password. 
The function includes:
* Several variables for the different types of characters available.
* If/then statements depending on the user's answers.
* For loop to generate random characters based on the user's preferred password length.

View the application at https://acuson.github.io/password-generator/