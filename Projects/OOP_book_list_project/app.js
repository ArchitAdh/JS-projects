// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//

// UI Constructor
function UI() {}

// Prototype Declarations
// Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  //   create tr
  const row = document.createElement("tr");

  //instert cols
  row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
    <td>  ${book.isbn} </td>
    <td>  <a href ='#' class = 'delete'>X</a> </td>
  `;

  list.appendChild(row);
};

//Show alert
UI.prototype.showAlert = function (message, className) {
  //create div
  const div = document.createElement("div");
  //add classname
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector(".container");
  //get form
  const form = document.getElementById("book-form");

  //add alert
  container.insertBefore(div, form);

  //timeout after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// delete book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete")
    target.parentElement.parentElement.remove();
};

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = " ";
  document.getElementById("author").value = " ";
  document.getElementById("isbn").value = " ";
};

// EVENT LISTENERS

//  Event listener for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  // get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // validate
  if (title === "" || author === " " || isbn === " ") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    //   Add book to list
    ui.addBookToList(book);

    //show alert
    ui.showAlert("book added!", "success");

    //   clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

//Event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  //Instantiate ui
  const ui = new UI();

  //delete book
  ui.deleteBook(e.target);

  //show alert
  ui.showAlert("Book Removed!", "success");

  e.preventDefault();
});
