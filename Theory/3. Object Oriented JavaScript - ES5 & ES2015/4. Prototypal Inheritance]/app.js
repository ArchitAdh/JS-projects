//Person Construtor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting prototypes
Person.prototype.greeting = function () {
  return "Hello there, " + this.firstName + " " + this.lastName + ".";
};

const person1 = new Person("Arch", "Adh");

console.log(person1.greeting());

// Customer constructor (refers person)
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

//Inherit person prototype method
Customer.prototype = Object.create(Person.prototype); //return prototype person in console
//Make customer.protoype return customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer("john", "Doe", 9845243221, "Standard");

console.log(customer1);

//customer greeting (prototype)
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}. Welcome to the company.`;
};
console.log(customer1.greeting());
console.log(person1.greeting());
