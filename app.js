const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
  // TODO: 버튼에 마우스오버하면 innerText가 버튼 제목으로 바뀌기
});
