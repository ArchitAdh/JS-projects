// // Object literal
// // this is how we create an object
const arch = {
  name: "Archit",
  age: 24,
};
// console.log(arch);
// console.log(arch.name);

// Constructors
// when we want to make multiple instances of certain type of object, we create constructor as a template
function Person(name, age) {
  this.name = name;
  this.age = age;
  //console.log(this);
}

const archi = new Person("Archit", 24);
const achu = new Person("Achyuta", 12);
// console.log(this);
// console.log(archi);
// console.log(achu.age);

// constructor with methods
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  // method
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}
const archit = new Person("Archit", "8-13-1996");

console.log(archit.calculateAge());
