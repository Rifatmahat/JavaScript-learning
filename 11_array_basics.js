var arrayOfNumbers = [1,3,7,8,9,3,7];
console.log("---resize array---");
console.log(arrayOfNumbers.length);
arrayOfNumbers.length=3;



console.log(arrayOfNumbers[10]);
console.log("-------------------------------");
const array1 = [1,3,4];
const array2 = [5,6,7];

const array3 = [...array1, ...array2]
console.log(array3);
console.log("-------------------------------");
var arrayOfNumbers = [1,3,7,8,9,3,7];

console.log(arrayOfNumers);
arrayOfNumbers.push(99);
arrayOfNumbers(88);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);

var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements available in array: ${arrayLength}`);

console.log(`Element at 4th index is: ${arrayOfNumbers[4]}`);

console.log(arrayOfNumbers);

let otherArray = [...arrayOfNumbers];
arrayOfNumbers[3] = 44;
console.table(arrayOfNumbers);
console.log(otherArray);