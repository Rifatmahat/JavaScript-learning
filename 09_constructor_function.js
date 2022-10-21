class Person
{
    fullName
    city
    age
    gender
    constructor(fullName,city,age,gender)
    {
        this.fullName = fullName;
        this.city = city;
        this.age = age;
        this.gender = gender
    }
    details()
    {
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
Person.prototype.country = "india"
let p = new Person("Rifat mahat", "miraj",26,"female");
let m = new Person("mahat","mumbai",32,"female");

let riya = new Person("riya","usa",30,"male");
let sonu = new Person("sonu","uk",40,"male");

console.log(p.country);
console.log(m.country);
console.log(riya);
console.log(sonu);

p.details();
let myString = "Developer";

class Student
{
    constructor(rollNo,schoolName)
    {
        this.rollNo = rollNo;
        this.schoolName = schoolName
    }

}
let s1 = new Student(123,"ABC");
let s2 = new Student(123,"ABC");

console.log(s1 instanceof Student);
console.log(p instanceof Student);

console.log(s1.rollNo,s1.schoolName);
s1.rollNo = 123;
delete s1.rollNo;
console.log(s1);

