document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

//Fetch Local text file
function getText() {
  // fetch("test.txt")
  //   .then(function (res) {
  //     return res.text();

  //   })
  //   .then(function (data) {
  //     console.log(data);
  //     document.getElementById("output").innerHTML = data;
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });

  //using arrow function
  fetch("test.txt")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

//Fetch Local JSON file
function getJson() {
  // fetch("posts.json")
  //   .then(function (res) {
  //     return res.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //     let output = "";
  //     data.forEach(function (post) {
  //       output += `<li>${post.title} <br> &nbsp; &nbsp; ${post.body} </li>`;
  //     });
  //     document.getElementById("output").innerHTML = output;
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });

  //using arrow function
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title} <br> &nbsp; &nbsp; ${post.body} </li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

//Fetch from External API
function getExternal() {
  // fetch("https://api.github.com/users")
  //   .then(function (res) {
  //     return res.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //     let output = "";
  //     data.forEach(function (user) {
  //       output += `<li>${user.login}</li>`;
  //     });
  //     document.getElementById("output").innerHTML = output;
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });

  //using arrow function
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
