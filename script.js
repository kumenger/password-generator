// create a function called generatePassword()
// with promote window all user to enter 8 up to 128 numbers and  alert message if criteria is not meet
var generatePassword = () => {
  let givenpassword = prompt(
    "how many characters you password shoud  contain ?"
  );
  var isValidatd = false;
  let resultPwd = "";
  let radonnumber = Math.round(Math.random() * 9);

  if (!isNaN(givenpassword) && givenpassword >= 8 && givenpassword <= 128) {
    if (window.confirm("click ok to include special character")) {
      let resultSpecia = addSpecialCharacter();
      isValidatd = true;

      resultPwd = resultSpecia + resultPwd;
    }

    if (window.confirm("click ok to include numeric characters")) {
      resultPwd = resultPwd + radonnumber;
      isValidatd = true;
    }

    if (window.confirm("click ok to include lowerCase Characters")) {
      resultPwd = resultPwd + letter[Math.round(Math.random() * 26)];
    }

    if (window.confirm("clik ok to add upperCase characters")) {
      isValidatd = true;
      resultPwd =
        resultPwd + letter[Math.round(Math.random() * 26)].toUpperCase();
    }
  } else {
    window.alert("minimum 8 characters and enter numbers only");
  }
  resultPwd = resultPwd + makechars(givenpassword - resultPwd.length);
  //this function checks at leaset  at least one  upperCase,special character or numeric  selected
  function checvalidation() {
    resultPwd = "";
    window.alert(
      "you must selcet at least one  upperCase,special character or numeric "
    );
    return resultPwd;
  }
  return isValidatd ? resultPwd : checvalidation();
};
// this function add special characters
let addSpecialCharacter = () => {
  let newstr = chars[Math.floor(Math.random() * chars.length)];
  return newstr;
};
// function to add characters based on user give number
const makechars = (numberOFChars) => {
  let chars = "";
  for (let i = 1; i <= numberOFChars; i++) {
    var ramdomchar = letter[Math.floor(Math.random() * letter.length)];
    chars = chars + ramdomchar;
  }
  return chars;
};

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
let chars = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
let letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
