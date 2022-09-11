const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("numner");
const message = document.getElementById("message");
const clicker = document.getElementById("btn");

//OnFocus Event
form.addEventListener("focus", myOnFocusFunction, true);
function myOnFocusFunction() {
  username.style.backgroundColor = "blue";
  username.style.color = "white";
}
//Onblur Event
form.addEventListener("blur", myOnBlurFunction, true);
function myOnBlurFunction() {
  username.style.backgroundColor = "red";
}

//Submit Button OnClickListener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //Finction to vlaidate the input fields
  checkInputs();

  //Function to display the success message
  successMsg();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  //const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();
  const messageLength = message.value.length;

  //Username Validation
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    function myblurFunction() {
      const x = document.getElementById("username");
      x.value = x.value.toUpperCase();
    }
    setSuccessFor(username);
  }

  //Email Validation
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  //Messagefield Validation
  if (messageValue === "") {
    setErrorFor(message, "The message cannot be empty");
  } else if (messageLength > 500) {
    setErrorFor(message, "The message cannot be <500 words");
  } else {
    setSuccessFor(message);
  }

  return true;
}

//Function to display the error message
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
  small.innerText = message;
}

//Function to disaply the success message
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Success Message disaplyed after validation
function successMsg() {
  if (username.value !== "") {
    document.getElementById("successMsg").style.color = "green";
    document.getElementById("successMsg").style.fontSize = "1rem";

    document.getElementById("successMsg").innerHTML =
      "Dear " +
      username.value +
      ", Thank you for your inquiry. One of our team members will be in touch with you shortly";
  } else {
    alert("Fulfill the required value");
  }
}

//Function to check is the entered email is valid or not

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
