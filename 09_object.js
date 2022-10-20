
let variable_name = "";
let person = 
{
    fullName: "Rifat Mahat",
    city: "miraj",
    age: 26,
    isMarried: false,
      address: {
        street: "Abc road",
        pin_code: 987654,
        city: "Sangli",
        state: "MH",
      },
      eat:function()
      {
        console.log("I am Veg");
      },
      walk: function()
      {
        console.log("i do walk");
      },
      deatils: function()
      {
        console.log(this.fullName);
      }
    
}

person.deatils();

console.log("==================");

console.log(typeof person);
console.log(person.address);
console.log(person.address.street);
person.address.landmark="near BOI";

person.eat();


person.pinCode = 123456;
person.profession = "Engineer";

delete person.age;

console.log(person);
console.log(person["age"]);

let personFullName = person.fullName;
console.log(personFullName);
console.log(person.fullName);



