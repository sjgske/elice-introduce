const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});
