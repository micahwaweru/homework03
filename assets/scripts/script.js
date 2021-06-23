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
  // var passwordLength = prompt('Password Length');
  // console.log('Password length ' + passwordLength);
  var includeNum = false;
  var includeCapitals =false;
  var includeSpecChars =false;

  var length = 5;
  var string = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var stringCap= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numeric = ['0','1','2','3','4','5','6','7','8','9'];
  var punctuation = ['!','@','#','$','%','^','&','*','(',')','_','+','~','`','|','}','{','[',']','\',',':',';','?','>','<',',','.','/','-','=']
  var password = '';
  console.log('Punctuation ' + punctuation);
  
  if(includeNum!==false){
     for(i=1;i<length+1;i++){
      var possibleChars=string.concat(numeric);
      console.log(possibleChars);
      var c=Math.floor(Math.random()*possibleChars.length);
      console.log('C: ' +c);
      password=possibleChars[c];
     }
  }

  if(includeNum!==false&&includeCapitals!==false){
    for(i=1;i<length+1;i++){
      var possibleChars=string+numeric+stringCap;
      console.log(possibleChars);
      var c=Math.floor(Math.random()*possibleChars.length);
      password+=possibleChars.charAt(c);
     }
  }
  if(includeNum!==false&&includeCapitals!==false&&includeSpecChars!==false){
    for(i=1;i<length+1;i++){
      var possibleChars=string+numeric+stringCap+punctuation;
      console.log(possibleChars);
      var c=Math.floor(Math.random()*possibleChars.length);
      console.log('C: ' + c);
      password+=possibleChars.charAt(c);
     }
  }
  
 else if(includeNum!==true&&includeCapitals!==true&&includeSpecChars!==true){
    for(i=1;i<length+1;i++){
      var c=Math.floor(Math.random()*string.length);
      console.log('Possible Characters: ' + string);
      console.log('C: ' + c);
      c++;
      password=string[c];
    }
  }
  



  passwordText.value = password;
}

//console.log(generatePassword());



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

console.log('is js linked?'); 