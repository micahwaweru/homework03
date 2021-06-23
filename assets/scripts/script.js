// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log('Generate Password Function')

  

  // var includeCapitals = confirm('Include Capitals?');
  // console.log('Include capitals ' + includeCapitals);
  // var includeSpecChars = confirm('Include Special Characters?');
  // console.log('Include Special Characters ' + includeSpecChars);
  var passwordLength = prompt('Password Length');
  console.log(passwordLength);
  var len = parseInt(passwordLength);
  console.log(len);
  var includeNum = confirm('Include Numbers?');
  console.log(includeNum);
  var includeCapitals = confirm('Include Capitals?');
  console.log(includeCapitals);
  var includeSpecChars =confirm('Include Special Characters?');
  console.log(includeSpecChars);

  var length=len;

console.log('Length Null or? ' + length);
  
  
  var string = 'abcdefghijklmnopqrstuvwxyz';
  var stringCap= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numeric = '01234567890';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-='
  var password = '';
  console.log('Punctuation ' + punctuation);
  
  if(includeNum!==false&&includeCapitals!==true&&includeSpecChars!==true){
     for(i=1;i<length+1;i++){
      var possibleChars=string.concat(numeric);
      console.log(possibleChars);
      var c=Math.floor(Math.random()*possibleChars.length);
      password+=possibleChars.charAt(c)
     }
  }

  if(includeNum!==false&&includeCapitals!==false&&includeSpecChars!==true){
    for(i=1;i<length+1;i++){
      var possibleChars=string.concat(numeric, stringCap);
      console.log(possibleChars);
      var c=Math.floor(Math.random()*possibleChars.length);
      password+=possibleChars.charAt(c);
     }
  }
  if(includeNum!==false&&includeCapitals!==false&&includeSpecChars!==false){
    for(i=1;i<length+1;i++){
      var possibleChars=string.concat(numeric, stringCap, punctuation);
      console.log(possibleChars);
      var c=Math.floor(Math.random()*possibleChars.length);
      console.log('C: ' + c);
      password+=possibleChars.charAt(c);
     }
  }
  
 else {
    for(i=1;i<length+1;i++){
      var c=Math.floor(Math.random()*string.length+1);
      console.log('Possible Characters: ' + string);
      password+=string.charAt(c);
      
    }
  }
  



  passwordText.value = password;
}

//console.log(generatePassword());



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

console.log('is js linked?'); 