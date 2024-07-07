// TagName
let h1_element = document.getElementsByTagName("h1");
console.log("TagName", h1_element);

// ClassName
let h2_element = document.getElementsByClassName("title2");
console.log("ClassName", h2_element);

// id
let p_element = document.getElementById("para_id");

// set time out

setTimeout(() => {
  p_element.innerHTML = "Updated Value";
}, 2500);

console.log("Id", p_element);

let timer_element = document.getElementById("Timer");

timer_element.style.color = "red";
timer_element.style.backgroundColor = "black";
timer_element.style.padding = "1rem";

let i = 0;

setInterval(() => {
  timer_element.innerHTML = i;
  i++;
}, 1000);

function clickHandler() {
  let first_name = document.querySelector("#first_name");
  console.log(first_name.value);
}

// querySelector
let btn = document.querySelector("#btn_1");
btn.addEventListener("click", clickHandler);
