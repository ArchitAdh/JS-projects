//initialize a variable http
const http = new EasyHTTP();

// //Get users
// http.get("https://jsonplaceholder.typicode.com/users")
//   // .then(function (data) {
//   //   console.log(data);
//   // })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// User Data
const data = {
  name: "JOhn Doe",
  username: "johndoe",
  email: "jdoe@gmail.com",
};

// //Create User
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// //Update User
// http
//   .put("https://jsonplaceholder.typicode.com/users/5", data)
//   //updating info of user with id 5
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//Delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
