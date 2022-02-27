// Assignment code here

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 96);
}
function getRandomUper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpec() {
  var symbols = '!@#$%^&*()_+<>?:"}{|';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower(), getRandomUper(), getRandomNum(), getRandomSpec());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function userOptions() {
  var confirmLength = parseInt(
    prompt("How long would you like your password? (Must be between 8-128)")
  );
  if (confirmLength < 8 || confirmLength > 128) {
    alert(" Try again: Password must be between 8 and 128 characters");
    return;
  }

  var confirmU = confirm("Would you like to use uppercase letters?");
  var confirmL = confirm("Would you like to use lowercase letters?");
  var confirmNum = confirm("Would you like to use number letters?");
  var confirmS = confirm("Would you like to use special characters?");
  var confirmations = {
    confirmLength: confirmLength,
    confirmU: confirmU,
    confirmNum: confirmNum,
    confirmS: confirmS,
    confirmL: confirmL,
  };
  return confirmations;
}
function generatePassword() {
  var options = userOptions();
  console.log(options);
  var randomChar = [];

  for (i = 0; i < options.confirmLength; i++) {
    if (options.confirmU === true) {
      randomChar.push(getRandomUper());
    }

    if (options.confirmS === true) {
      randomChar.push(getRandomSpec());
    }

    if (options.confirmL === true) {
      randomChar.push(getRandomLower());
    }

    if (options.confirmNum === true) {
      randomChar.push(getRandomNum());
    }
  }
  return randomChar;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
