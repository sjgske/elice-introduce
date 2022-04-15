const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      buttons.forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
    }
  });
});
