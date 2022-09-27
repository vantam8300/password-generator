// Assignment code here
function generatePassword() {
  // prompt user for the length
  var length = window.prompt("Please enter the length of your password from at least 8 to 128 characters");

  // validate the length of password
  while (length < 8 || length > 128) {
    length = window.prompt("Please enter the length of your password from at least 8 to 128 characters");
  }

  // call function to get character types
  var characterTypes = promptCharaterTypes();

  var characters = "";

  // if user want to inclure lowercase
  if (characterTypes[0]) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }

  //if user want to inclure uppercase
  if (characterTypes[1]) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  // if user want to inclure numeric
  if (characterTypes[2]) {
    characters += "0123456789"
  }

  // if user want to inclure special characters
  if (characterTypes[3]) {
    characters += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  
  // pick random letter from "characters" and add to result
  var result = "";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
    characters.length));
  }

  return result;

}

// prompt user for character types
function promptCharaterTypes() {

  var lowercase = window.confirm("Do you want your password including lowercase characters?");

  var uppercase = window.confirm("Do you want your password including uppercase characters?");

  var numeric = window.confirm("Do you want your password including numeric characters?");

  var special = window.confirm("Do you want your password including special characters?");

  var types = [lowercase, uppercase, numeric, special];

  // validate if user select at least one character type
  for (var i = 0; i < types.length; i++) {
    if (types[i]) {
      break;
    } else if (i == 3 && types[i] == false) {
      // ask user to re-enter character types
      window.alert("Please select at least one character type");
      promptCharaterTypes()
    }
  }

  return types;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
