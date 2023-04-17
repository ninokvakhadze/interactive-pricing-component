const button = document.querySelector(".sliding-button");
const ball = document.querySelector(".ball");
const month = document.querySelector(".month");
const price = document.querySelector(".price");
const pageViews = document.getElementById("views");
let sliderColor = document.getElementById("Range");
let active = 0;
function rangeSlide(value) {
  if (active == 0) {
    price.innerHTML = "$" + value + ".00";
  } else {
    price.innerHTML = "$" + `${Number(sliderColor.value) * 12 * 0.75}.00`;
  }
  if (sliderColor.value <= 10) {
    pageViews.innerHTML = "10K PAGEVIEWS";
  } else if (sliderColor.value <= 20) {
    pageViews.innerHTML = "50K PAGEVIEWS";
  } else if (sliderColor.value <= 25) {
    pageViews.innerHTML = "100K PAGEVIEWS";
  } else if (sliderColor.value < 25) {
    pageViews.innerHTML = "500K PAGEVIEWS";
  }
}

button.addEventListener("click", function () {
  if (active == 0) {
    button.style.backgroundColor = "#7AEADF";
    button.style.transition = "0.5s";
    ball.style.left = "26px";
    ball.style.transition = "0.5s";
    month.innerHTML = "/year";
    active = 1;
    price.innerHTML = "$" + `${Number(sliderColor.value) * 12 * 0.75}.00`;
  } else {
    button.style.backgroundColor = "#CFD8EF";
    ball.style.left = "3px";
    month.innerHTML = "/month";
    active = 0;
    price.innerHTML = "$" + sliderColor.value + ".00";
  }
});
sliderColor.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #A4F3EB 0%, #A4F3EB " +
    value +
    "%, #ECF0FB " +
    value +
    "%, #ECF0FB";
};
