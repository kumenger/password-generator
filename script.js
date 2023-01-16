//create a function called generatePassword()
// with promote window all user to enter 8 up to 128 characters and  alert message if criteria is not meet
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
var generatePassword = () => {
  let givenpassword = prompt("how characters you password contain ?");
  //this variable holds our result when ever changes made
  let resultPwd = "";
  //this counter helps to keep password length when characters or number are selected in promote
  let counter=0
  console.log(resultPwd)
  if (!isNaN(givenpassword) && givenpassword >= 8 && givenpassword <= 128) {
    
    console.log(resultPwd)
    if (window.confirm("click ok to include special character")) {
      counter=counter+1
     let resultSpecia = addSpecialCharacter();
     let  resultChars= makechars(givenpassword-counter);
      resultPwd=resultSpecia+resultChars
      console.log(resultPwd)
      if (window.confirm("click ok to include numeric characters")) {
        let radonnumber= Math.round(Math.random() * 9)
        counter=counter+1
        resultPwd = addSpecialCharacter() +radonnumber+makechars(givenpassword-counter);
        console.log(resultPwd)
        if (window.confirm("click ok to include lowerCase Characters")) {
          counter=counter+1
          resultPwd = addSpecialCharacter() +radonnumber+makechars(givenpassword-counter) + letter[Math.round(Math.random() * 26)];
          console.log(resultPwd)
          if (window.confirm("clik ok to add upperCase characters")) {
            counter=counter+1
            resultPwd =
            addSpecialCharacter() +radonnumber+makechars(givenpassword-counter) + letter[Math.round(Math.random() * 26)] + letter[Math.round(Math.random() * 26)].toUpperCase();
              console.log(resultPwd)
          } else {
             resultPwd =addSpecialCharacter() +radonnumber+makechars(givenpassword-counter) + letter[Math.round(Math.random() * 26)];;
          }
        } else {
          resultPwd = addSpecialCharacter() +radonnumber+makechars(givenpassword-counter);
        }
      } else {
         resultPwd = makechars(givenpassword-counter)+addSpecialCharacter();
      }
    } else {
       
      resultPwd = makechars(givenpassword);
    }
  } else {
    window.alert("minimum 8 characters and enter numbers only");
  
  }

  return resultPwd;
};
//this function checks weather a string have a specal characters or not
let addSpecialCharacter = () => {
  let newstr =  chars[Math.floor(Math.random() * chars.length)];
 
  return newstr;
};
//function to add characters based on user give number
const makechars = (numberOFChars) => {
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
