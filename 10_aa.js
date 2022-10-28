function fabo(myNumber) {
    if (myNumber == 0) {
        return 0;
    }
    if( myNumber == 1) {
        return 1;
    }
    let fN = 0; sN=1; nextN = fN + sN;
    
    for (let index = 0; index < myNumber; index++) {
        fN = sN;
        sN = nextN;
        nextN = fN + sN;
        console.log(nextN);
    }
}

fabo(5);

let person = {
    name: "Mohit",
    age : 31,
    city : "Pune",
    address: {
        pin: 431202,
        street: "Kanch pokali"
    }
}
console.log(person.name, person.age, person.city);
console.log(person);
let student = {...person};

student.city = "Mumbai";
person.age = 33;
console.log(student.city, person.city);
console.log(student.age, person.age);

student.address.street = "Khav Galli";
console.log(student.address.street);
console.log(person.address.street);

console.table(person);
console.table(student);





