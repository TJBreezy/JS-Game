const error = document.getElementById("error");
const btn = document.getElementById("purchase_btn");

btn.onclick = errorMessage;

function errorMessage() {
  error.innerText = "Something went wrong. Please, try again."
}