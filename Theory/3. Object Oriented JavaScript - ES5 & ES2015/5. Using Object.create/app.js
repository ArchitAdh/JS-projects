const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const arch = Object.create(personPrototypes);
arch.firstName = "Archit";
arch.lastName = "Adhikari";
arch.age = 23;
console.log(arch.greeting());
arch.getsMarried("Adhikari 😎");

console.log(arch);

//alternative
const harry = Object.create(personPrototypes, {
  firstName: { value: "Hari" },
  lastName: { value: "Bahadur" },
  age: { value: 58 },
});

console.log(harry);

// Brad below

// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Traversy'},
//   age: {value: 36}
// });

// console.log(brad);

// console.log(brad.greeting());
