document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://sv443.net/jokeapi/v2/joke/Any?type=single&amount=${number}`,
    true
  );

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      // const response = this.responseText;
      console.log(response);

      let output = "";

      if (response.error === false) {
        if (number == 1) {
          output = `<p>
          <b> ${response.category}:  </b>
          ${response.joke} <p/>`;
        } else {
          response.jokes.forEach(function (joke) {
            output += `<li> 
           <b> ${joke.category}:  </b>
            ${joke.joke}
            </li>`;
          });
        }
      } else {
        output += "<li>Something went wrong</li>";
      }

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
