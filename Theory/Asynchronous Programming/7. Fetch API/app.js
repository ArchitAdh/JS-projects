document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

//Fetch Local text file
function getText() {
  //fetch takes in whatever we want to get, in this case test.txt
  //fetch returns promises,
  //whenever we want to get response from promise we use  .then
  fetch("test.txt")
    .then(function (res) {
      return res.text();
      //returns response info including states and data
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
      //returns response data
    })
    .catch(function (err) {
      console.log(err);
      //catches (displays) error if any
    });
}

//Fetch Local JSON file
function getJson() {
  fetch("posts.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title} <br> &nbsp; &nbsp; ${post.body} </li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

//Fetch from External API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
