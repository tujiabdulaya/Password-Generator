// Assignment Code
var lowerCase = ["a","b","c",  "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
console.log(lowerCase)
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
var generateBtn = document.querySelector("#generate");

var numbers = [1,2,3,4,5,6,7,8,9,0]
var spacialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_",".",",","/","?",";",":"]
var passwordLenght 
var confirmUpperCase 
var confirmLowercase
var confirmNumbers
var confirmSpecialCharacters






function generatePassword() {
  console.log("generatePassword");
  // prompt password
  // lenght of password
  // lowecase and uppercase, numbers, sp charcater
  // input valadtion
  // genarate password based on criteria
  passwordLenght = prompt(
    "Choose a length of at least 8 characters and no more than 128 characters"
  );
  if(passwordLenght < 8 || passwordLenght > 128){
    passwordLenght = prompt(
      "Choose a length of at least 8 characters and no more than 128 characters"
    ); 
    
  } 
  confirmLowercase = confirm("Press Ok to add lowerCase")
  console.log ("hi"+confirmLowercase)
  confirmSpecialCharacters = confirm("Press Ok for SpecailCharacters")
  confirmNumbers= confirm("Press ok for Numbers")
  confirmUpperCase = confirm("Press Ok for add UpperCase")
  console.log ("bye"+confirmUpperCase)

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
