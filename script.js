//create a function called generatePassword()
// with promote window all user to enter 8 up to 128 characters and  alert message if criteria is not meet
var generatePassword = () => {
  let givenpassword = prompt("please enter your pasword");
  if ( givenpassword.length >=8 && givenpassword.length <= 128) {
    window.alert("your password meet the criteria");
  } else {
    window.alert("minimum 8 character maximim 18 characters need");
  }
  return givenpassword
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
