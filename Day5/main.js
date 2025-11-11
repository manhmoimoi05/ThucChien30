const button = document.querySelector(".icon__search");

button.addEventListener("click", function () {
  this.parentElement.classList.toggle("active");
});
