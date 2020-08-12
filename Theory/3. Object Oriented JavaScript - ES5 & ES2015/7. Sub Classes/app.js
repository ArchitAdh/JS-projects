class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hello ${this.firstName} ${this.lastName}.`;
  }
}

const regina = new Person("Regina", "Phalange");
console.log(regina);
console.log(regina.greeting());

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return 500;
  }
}

const ken = new Customer("Ken", "Adams", 9845234542, "standard");

console.log(ken);
console.log(ken.greeting());
console.log(Customer.getMembershipCost());
// console.log(Person.getMembershipCost());
