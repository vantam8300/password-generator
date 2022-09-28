// Assignment code here
var specialCharacter = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function getPasswordOption() {
  // prompt user for the length
  var length = parseInt(window.prompt("Please enter the length of your password from at least 8 to 128 characters"));

  if (Number.isNaN(length)) {
    alert("password length must be provided as a number");
    return null;
  }
  // validate the length of password
  if (length < 8 || length > 128) {
    alert("password must be between 8 to 128 characters");
    return null;
  }

  // prompt user for character types
  var hasLowercase = window.confirm("Do you want your password including lowercase characters?");

  var hasUppercase = window.confirm("Do you want your password including uppercase characters?");

  var hasNumeric = window.confirm("Do you want your password including numeric characters?");

  var hasSpecial = window.confirm("Do you want your password including special characters?");

  // validate character type
  if (hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSpecial === false)  {
    alert("must select at least one character type");
    return null;
  }

  var passwordOption = {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial
  };

 return passwordOption;
}


function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword(){

  var characterTypes = getPasswordOption();
  var result = [];
  var guaranteedChars = [];
  var posibleCharacter = [];

  // password has at least one lowercase
  if (characterTypes.hasLowercase) {
    posibleCharacter = posibleCharacter.concat(lowerCase);
    guaranteedChars.push(getRandom(lowerCase));
  }

  // password has at least one uppercase
  if (characterTypes.hasUppercase) {
    posibleCharacter = posibleCharacter.concat(uppercase);
    guaranteedChars.push(getRandom(uppercase));
  }

  // password has at least one number
  if (characterTypes.hasNumeric) {
    posibleCharacter = posibleCharacter.concat(number);
    guaranteedChars.push(getRandom(number));
  }

  // password has at least one special character
  if (characterTypes.hasSpecial) {
    posibleCharacter = posibleCharacter.concat(specialCharacter);
    guaranteedChars.push(getRandom(specialCharacter));
  }

  // fill the rest with random character
  for (var i = guaranteedChars.length; i < characterTypes.length; i++) {
    guaranteedChars.push(getRandom(posibleCharacter));
  }

  result = guaranteedChars.join("");

  return result;

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
