//assignment

var countVowels = function(myString)
 {
    console.log("Count the total number vowels using includes() for string → “I am very good IT Developer”");
   
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) 
    {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable =  vowelUpperCase.includes(char);
       if (isLowerAvailable || isUpperAvailable)
        {
            vowelsCount = vowelsCount + 1;
        }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
 } 
 countVowels("I am very good IT Developer");

 console.log("==========================================================================");
 
 //2nd question
 console.log("Function to get the sum of cubes of numbers from 1 to 5..");

 function cubes(n)
 {
    let cubes=0;
    for(let i=1; i<=n; i++)
    {
        cubes = i**3;
    }
    return cubes;
 }
 console.log(cubes(1));
 console.log(cubes(2));
 console.log(cubes(3));
 console.log(cubes(4));
 console.log(cubes(5));

 console.log("==========================================================================");

 //3rd question

 /*function oddPositionedChars(string1)
 {
    return type
oddPositionedChars("Hard work always pays back");*/

