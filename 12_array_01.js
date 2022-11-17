console.log("...........creating new array object from existing object...............");

const arr_original = [1,2,4,6,77,88,99];
let arr_copy = [...arr_original];
console.log(arr_original);
console.log(arr_copy);

console.log("...........to merge to array...............");

const array1= [1,2,3,4];
const array2= [5,6,7,8];
const array3= array1.concat(array2);
console.log(array3);
const array4= [...array1,...array2];
console.log(array4);


