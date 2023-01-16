

//create a function called generatePassword()
// with promote window all user to enter 8 up to 128 characters and  alert message if criteria is not meet
var generatePassword = () => {
  let givenpassword = prompt("how characters you password contain ?");
  let resultPwd
  if (!isNaN(givenpassword) && givenpassword >= 8 && givenpassword <= 128) {
    resultPwd=makechars(givenpassword)
    if (window.confirm("click ok to include special character")) {
    resultPwd=addSpecialCharacter(resultPwd)
  
    } else {
      generatePassword();
    }
  } else {
    window.alert("minimum 8 characters and enter numbers only");
    generatePassword();
  }

  return resultPwd;
};
//this function checks weather a string have a specal characters or not
let addSpecialCharacter = (str) => {
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

  for (let i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) {
      return str;
    }
   
  }
  let newstr=str+chars[Math.floor(Math.random()*chars.length)]
  return newstr;
};
//function to add characters based on user give number
const makechars=(numberOFChars)=>{
  let letter=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let chars='';
  for(let i=1;i<=numberOFChars;i++){
    var ramdomchar=letter[Math.floor(Math.random()*letter.length)]
    chars=chars+ramdomchar
  }
  return chars
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
