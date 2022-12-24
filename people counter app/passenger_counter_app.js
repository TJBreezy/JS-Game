const incButton = document.getElementById("increment_btn");
const saveButton = document.getElementById("save_btn");
const saveEl = document.getElementById("save_el");
const count = document.getElementById("count");


incButton.onclick=increment;
saveButton.onclick= save;

let number = 0;

function initializer(){
  number = 0;
  count.innerText = number;
}

function increment() {
  console.log("A person has passed.");
  number = ++ number;
  count.innerText = number;
}

// alternatively, .textContent can be used instead of .innerText
function save(){
  console.log("The total number now is: " + number);
  saveEl.textContent += " " + number + " - ";
// call the function initializer which brings the count back to zero when one presses save
  initializer();
}
