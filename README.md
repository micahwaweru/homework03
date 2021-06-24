# homework03
For this activity, I started off with reading through the User Story & the acceptance criteria. After evaulating what code already existed in the file, I began my first Google search: 'How to make a password generator in JavaScript'. I found a multitude of examples but in the end I decided that I would begin based on a simple example that fit my use case. After reading through the function that I found I started to get ideas of how I could incorperate that base idea into my own code. The function I found only generated one password based off of one string whereas I needed to be able to use 4 strings depending on boolean values as well as set my length from a value. So I began with hard-coding the length (instead of setting it as a variable) and hard coding my booleans to all equal false. I started by testing my new founds function to see if it would perform the way I expected. Once it did, I began to incorperate if statements using incrementation based of of my length variable (still hard-coded at this time). Once my if statements work working as expected with my boolean values, I began to re-assign the boolean values to variables set by the confirms. 

As you can see within my generatePassword function, the key to my success was concatinating my strings so into a new variable called 'possibleChars' so that if a condition was true, a new set of possible characters is generated based on the two related strings.

https://micahwaweru.github.io/homework03/

https://github.com/micahwaweru/homework03

https://github.com/micahwaweru/homework03/main/assets/images/Screen%20Shot%202021-06-23%20at%201.04.08%20AM.png
