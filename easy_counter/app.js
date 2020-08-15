let count = 0;
const counter = document.querySelector(".number");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

increaseBtn.addEventListener("click", () => increase());
decreaseBtn.addEventListener("click", () => decrease());
resetBtn.addEventListener("click", () => reset());

function increase() {
  count++;
  counter.innerHTML = count;
  counterColor(count);
}

function decrease() {
  count--;
  counter.innerHTML = count;
  counterColor(count);
}

function reset() {
  count = 0;
  counter.innerHTML = count;
  counterColor(count);
}

function counterColor(num) {
  if (num > 0) counter.classList.add("green-positive");
  else if (num < 0) counter.classList.add("red-negative");
  else {
    counter.classList.remove("green-positive");
    counter.classList.remove("red-negative");
  }
}
