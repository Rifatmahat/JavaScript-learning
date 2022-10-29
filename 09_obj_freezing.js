const person = {
    name: "Mohit",
    rollNo : 1234
}
Object.freeze(person);

person.name = "Mohit Sharma";// Modification not considered as person object is freezed
person.street = "AS CLUB"; // Adding new property is not considered as person object is freezed
console.log(person);
