//Form Blur Event Listeners
//event listeners that fire when control comes out of the form field
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");

  //name between 2 -10
  // const re = /^[A-Za-z]{3,10}$/;

  //1 or more alphabets including space
  const re = /^[A-Za-z\s]+$/; //check this

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([\w\-\.]+)@([\w\-\.]+)\.([a-zA-Z]{2,5})$/;

  // const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  //begin and end should always be delimited
  //[] ko meaning bhitra ko all or some bhanne sense
  // () ko group a part
  // \ for escaping
  //description
  // suru ma alphanumeric keyword including - and . followed by @ and then same as former which is followed by a dot and at last alphabets which 2-5 long and end

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  // const re = /^[\d]{5,10}$/;

  //international
  // const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  //nepal system
  const re = /^(\+?\d{1,5})?[- ]?(\d{6,10})$/;
  //description
  // begin with +977 which is optional, where + is also optional, 1-5 length; space or dash in between which is optional; digits ranging from 6-10

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
