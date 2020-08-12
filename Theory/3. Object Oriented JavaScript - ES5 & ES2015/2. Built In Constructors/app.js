// String
// Not advised to use as it has no common befinit or many uses and rather slows down the execution and may run into problems as well (see if statement)

const name1 = "Archit";
const name2 = new String("Archit");

// name2.foo = "bar";
// console.log(name2);

console.log(typeof name2);

if (name2 === "Archit") {
  console.log("YES");
} else {
  console.log("NO");
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return x + y");
// console.log(getSum2(12, 12));

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re2);
