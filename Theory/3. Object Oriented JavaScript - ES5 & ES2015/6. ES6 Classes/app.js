class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello ${this.firstName} ${this.lastName}.`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  // static methods
  static addNumbers(x, y) {
    return x + y;
  }
}

const arch = new Person("Archit", "Adhikari", "13 aug 1996");
console.log(arch);
console.log(arch.greeting());
console.log(arch.calculateAge());
arch.getsMarried("Adhikari 😎");
console.log(arch.greeting());

// static method use
console.log(Person.addNumbers(1, 2));

// Brad
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');

// mary.getsMarried('Thompson');

// console.log(mary);

// console.log(Person.addNumbers(1,2));
