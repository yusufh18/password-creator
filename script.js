// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
var length = prompt("enter the length of the password")
length= Number(length)
while(length < 8 || length > 126){
  length = prompt("enter the length of the password")
  length= Number(length)
}

 var lowerCase = confirm("include a lowercase?")
 var upperCase = confirm("include a uppercase?")
 var numbers =confirm("include a number?")
 var specialChar =confirm("include a special char ?")
 while(lowerCase== false && upperCase== false && numbers==false && specialChar==false){
   lowerCase = confirm("include a lowercase?")
  upperCase = confirm("include a uppercase?")
  numbers =confirm("include a number?")
  specialChar =confirm("include a special char ?")

 }
 var password = ""

 var char =""
 if(lowerCase==true){
  char+="abcdefghijklmnopqrxtvwuxyz"
 }
 if(upperCase==true){
  char+="ABCDEFGHIJKLMNOPQRSTUVWUXYZ"
 }
 if (numbers==true){
  char+="12345678910"
 }
 if(specialChar==true){
  char+="#$%!?"
 }
 console.log(char)
for(var x=1; x<= length; x++){
password += char[Math.floor(Math.random()*char.length)]
}
return password
}
